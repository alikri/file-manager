import { createReadStream } from 'node:fs';
import { join } from 'node:path';

import { getCurrentDirectory } from '../config.js';

export const print = async (fileName) => {
  const filePath = join(getCurrentDirectory(), fileName);
  await new Promise((resolve, reject) => {
    const readableStream = createReadStream(filePath, { encoding: 'utf8' });

    readableStream.on('data', (chunk) => {
      console.log(chunk);
    });

    readableStream.on('error', (err) => {
      console.log(`Operation failed! Error in print(): ${err}`);
      reject(err); 
    });

    readableStream.on('end', () => {
      console.log('Finished reading file.');
      resolve();
    });
  });
};
