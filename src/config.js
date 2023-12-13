import path from 'path';
import { __dirname } from './utils.js';
import dotenv from 'dotenv';
import { Command } from 'commander';


const program = new Command();

program.option('--mode <modo>', 'variable de ambiente');
program.parse();


dotenv.config({ path: path.resolve(__dirname, '.env') });

const configs = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
};

console.log('El valor de MONGO_URL es:', process.env.PORT);
console.log('El valor de MONGO_URL es:', process.env.MONGO_URL);

export default configs;