import { createReadStream } from 'node:fs';
import { join } from 'node:path';

import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const printFileContent = async (fileName) => {
  const filePath = join(getCurrentDirectory(), fileName);
  await new Promise((resolve, reject) => {
    const readableStream = createReadStream(filePath, { encoding: 'utf8' });

    readableStream.on('data', (chunk) => {
      console.log(`${chunk}`);
    });

    readableStream.on('error', () => {
      reject(new Error(`Operation failed!`));
    });

    readableStream.on('end', () => {
      resolve();
    });
  });
};
