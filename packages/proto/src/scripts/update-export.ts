import { readdir, readFile, writeFile } from 'fs/promises';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Go up to the package root (assuming script is in src/scripts/)
const PACKAGE_ROOT = join(__dirname, '..', '..');
const GENERATED_DIR = join(PACKAGE_ROOT, 'src', 'generated');
const PACKAGE_JSON_PATH = join(PACKAGE_ROOT, 'package.json');

async function updateExports() {
  try {
    // Read all files in the generated directory
    const files = await readdir(GENERATED_DIR);
    
    // Filter for .ts or .js files (excluding index and .d.ts files)
    const protoFiles = files
      .filter(file => {
        const ext = parse(file).ext;
        const name = parse(file).name;
        return (ext === '.ts' || ext === '.js') && 
               name !== 'index' && 
               !file.endsWith('.d.ts');
      })
      .map(file => parse(file).name);

    // Remove duplicates
    const uniqueProtoFiles = [...new Set(protoFiles)];

    // Read current package.json
    const packageJsonContent = await readFile(PACKAGE_JSON_PATH, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    // Build exports object
    const exports: {
        [key: string]: {
          types: string;
          import: string;
          default: string;
        } | string | string[]
    } = {
      '.': {
        types: './src/generated/index.d.ts',
        import: './src/generated/index.js',
        default: './src/generated/index.js'
      }
    };

    // Add each proto file as an export
    uniqueProtoFiles.forEach(fileName => {
      exports[`./${fileName}`] = {
        types: `./src/generated/${fileName}.d.ts`,
        import: `./src/generated/${fileName}.js`,
        default: `./src/generated/${fileName}.js`
      };
    });

    // Update package.json
    packageJson.exports = exports;

    // Write back to package.json with pretty formatting
    await writeFile(
      PACKAGE_JSON_PATH,
      JSON.stringify(packageJson, null, 2) + '\n',
      'utf-8'
    );

    console.log('✅ Successfully updated package.json exports!');
    console.log(`📦 Added ${uniqueProtoFiles.length} proto file(s):`);
    uniqueProtoFiles.forEach(file => {
      console.log(`   - @repo/proto/${file}`);
    });
  } catch (error: any) {
    console.error('❌ Error updating exports:', error.message);
    process.exit(1);
  }
}

updateExports();