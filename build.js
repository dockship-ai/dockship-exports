const fs = require('fs-extra');
const path = require('path');

async function build() {
  try {
    console.log('Starting build process...');
    
    // Create public/assets folder
    await fs.ensureDir('public/assets');
    
    // Copy all assets from src/frontend/src/assets to public/assets
    if (await fs.pathExists('src/frontend/src/assets')) {
      await fs.copy('src/frontend/src/assets', 'public/assets');
      console.log('✅ Assets copied to public/assets');
      
      // List copied files
      const files = await fs.readdir('public/assets');
      console.log('📁 Files copied:', files);
    } else {
      console.log('❌ Assets folder not found at src/frontend/src/assets');
    }
    
    // Copy index.html if it exists
    if (await fs.pathExists('src/index.html')) {
      await fs.copy('src/index.html', 'public/index.html');
      console.log('✅ index.html copied to public');
    } else if (await fs.pathExists('index.html')) {
      await fs.copy('index.html', 'public/index.html');
      console.log('✅ index.html copied from root to public');
    }
    
    console.log('✅ Build complete!');
  } catch (err) {
    console.error('Error during build:', err);
  }
}

build();