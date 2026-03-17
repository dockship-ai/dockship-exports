const fs = require('fs-extra');
const path = require('path');

async function build() {
  try {
    console.log('Starting build process...');
    
    // Create public/assets folder
    await fs.ensureDir('public/assets');
    
    // Copy assets from all possible locations to public/assets
    const assetSources = [
      'src/frontend/src/assets',
      'assets'
    ];
    
    for (const source of assetSources) {
      if (await fs.pathExists(source)) {
        await fs.copy(source, 'public/assets');
        console.log(`✅ Assets copied from ${source} to public/assets`);
      }
    }
    
    // Copy index.html to public if it exists
    if (await fs.pathExists('index.html')) {
      await fs.copy('index.html', 'public/index.html');
      console.log('✅ index.html copied to public');
    } else if (await fs.pathExists('src/index.html')) {
      await fs.copy('src/index.html', 'public/index.html');
      console.log('✅ index.html copied from src to public');
    }
    
    // List copied files
    const files = await fs.readdir('public/assets');
    console.log('📁 Assets in public folder:', files);
    
    console.log('✅ Build complete!');
  } catch (err) {
    console.error('Error during build:', err);
    process.exit(1);
  }
}

build();