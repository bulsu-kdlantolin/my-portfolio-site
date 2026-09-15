import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const vitePath = path.resolve(__dirname, 'node_modules/vite/bin/vite.js');

const child = spawn(process.execPath, [vitePath], { stdio: 'inherit' });
child.on('close', (code) => process.exit(code || 0));
