const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

async function build() {
  try {
    console.log('🚀 Starting build process...');
    
    // Step 1: Run the frontend build
    console.log('📦 Building frontend...');
    execSync('cd src/frontend && pnpm run build', { stdio: 'inherit' });
    
    // Step 2: Ensure all directories exist
    await fs.ensureDir('public/assets');
    await fs.ensureDir('dist');
    
    // Step 3: Copy built files from frontend dist to root dist
    if (await fs.pathExists('src/frontend/dist')) {
      await fs.copy('src/frontend/dist', 'dist');
      console.log('✅ Copied built files to dist/');
    }
    
    // Step 4: Copy assets to both locations
    const assetSources = [
      'src/frontend/src/assets',
      'assets'
    ];
    
    for (const source of assetSources) {
      if (await fs.pathExists(source)) {
        // Copy to public/assets
        await fs.copy(source, 'public/assets');
        console.log(`✅ Assets copied from ${source} to public/assets`);
        
        // Also copy to dist/assets
        await fs.copy(source, 'dist/assets');
        console.log(`✅ Assets copied from ${source} to dist/assets`);
      }
    }
    
    // Step 5: Copy and fix index.html
    if (await fs.pathExists('index.html')) {
      await fs.copy('index.html', 'public/index.html');
      await fs.copy('index.html', 'dist/index.html');
      console.log('✅ index.html copied to public/ and dist/');
    }
    
    // Step 6: List all assets in dist
    const files = await fs.readdir('dist/assets');
    console.log('📁 Assets in dist folder:', files);
    
    console.log('✅ Build complete! Ready for deployment.');
  } catch (err) {
    console.error('❌ Error during build:', err);
    process.exit(1);
  }
}

build();