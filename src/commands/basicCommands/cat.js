import { createReadStream } from 'node:fs';
import { join } from 'node:path';

import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const printFileContent = async (fileName) => {
  const filePath = join(getCurrentDirectory(), fileName);
  await new Promise((resolve, reject) => {
    const readableStream = createReadStream(filePath, { encoding: 'utf8' });

    readableStream.on('data', (chunk) => {
      console.log(`\n${chunk}`);
    });

    readableStream.on('error', (err) => {
      reject(new Error(`\n\n!! Operation failed: ${err.message}\n\n`));
    });

    readableStream.on('end', () => {
      console.log('\n---\nFile has been read.\n---\n');
      resolve();
    });
  });
};
