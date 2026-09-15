import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tscPath = path.resolve(__dirname, 'node_modules/typescript/bin/tsc');
const vitePath = path.resolve(__dirname, 'node_modules/vite/bin/vite.js');

console.log('Running TypeScript check...');
execSync(`"${process.execPath}" "${tscPath}" --noEmit`, { stdio: 'inherit' });

console.log('Running Vite production build...');
execSync(`"${process.execPath}" "${vitePath}" build`, { stdio: 'inherit' });
