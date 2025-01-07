// export const logger = (req, res, next)=>{
//     const timestamp = new Date().toISOString()
//     const useragent = req.get("user-agent")
//     const method = req?.method
//     const url = req?.url
//     console.log(`${timestamp} - ${method} - ${url} - ${useragent} - ${status}`)
//     next()
// }

import fs, { fstatSync } from "fs"
import path from "path";
const date = new Date().toISOString().split('T')[0];
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDirectory = path.join(__dirname, '../utils/logs');
const logFilePath = path.join(logDirectory, `log-${date}.log`);

export const logger = (req, res, next) => {
    try {
        const timestamp = new Date().toISOString()
        const useragent = req.get("user-agent")
        const method = req?.method
        const url = req?.url
        const log = `${timestamp} - ${method} - ${url} - ${useragent}\n`
        fs.appendFileSync(logFilePath, log, Uint8Array)

    } catch (err) {
        console.log(err)
    }



}

