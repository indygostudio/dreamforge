import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/persona-examples');
const outputDir = path.join(__dirname, '../public/persona-examples/optimized');

// Create output directory if it doesn't exist
try {
    await fs.mkdir(outputDir, { recursive: true });
} catch (error) {
    if (error.code !== 'EEXIST') throw error;
}

async function optimizeImage(inputPath, outputPath) {
    try {
        // Create base sharp instance with common operations
        const baseImage = sharp(inputPath)
            .resize(800, 800, {
                fit: 'inside',
                withoutEnlargement: true
            });

        // Create WebP version
        await baseImage
            .clone()
            .webp({ quality: 80 })
            .toFile(outputPath.replace('.png', '.webp'));

        // Create optimized PNG version
        await baseImage
            .clone()
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(outputPath);

        const stats = await fs.stat(inputPath);
        const optimizedWebpStats = await fs.stat(outputPath.replace('.png', '.webp'));
        const optimizedPngStats = await fs.stat(outputPath);
        
        console.log(`Optimized ${path.basename(inputPath)}:`);
        console.log(`  Original size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`  Optimized WebP size: ${(optimizedWebpStats.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`  Optimized PNG size: ${(optimizedPngStats.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`  WebP reduction: ${(100 - (optimizedWebpStats.size / stats.size) * 100).toFixed(1)}%`);
        console.log(`  PNG reduction: ${(100 - (optimizedPngStats.size / stats.size) * 100).toFixed(1)}%\n`);
    } catch (error) {
        console.error(`Error processing ${inputPath}:`, error);
    }
}

async function optimizeAll() {
    const files = await fs.readdir(inputDir);
    
    for (const file of files) {
        if (file.toLowerCase().endsWith('.png')) {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, file);
            await optimizeImage(inputPath, outputPath);
        }
    }
}

try {
    await optimizeAll();
    console.log('Image optimization complete!');
} catch (error) {
    console.error('Error during optimization:', error);
}
