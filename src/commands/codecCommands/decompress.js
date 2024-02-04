import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { unlink } from 'fs/promises';
import { join, isAbsolute } from 'path';

import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const decompressFile = async (sourceFilePath, destinationFilePath) => {
  const fullSourceFilePath = isAbsolute(sourceFilePath)
    ? sourceFilePath
    : join(getCurrentDirectory(), sourceFilePath);

  const fullDestinationFilePath = isAbsolute(destinationFilePath)
    ? destinationFilePath
    : join(getCurrentDirectory(), destinationFilePath);

  try {
    await pipeline(
      createReadStream(fullSourceFilePath),
      createBrotliDecompress(),
      createWriteStream(fullDestinationFilePath)
    );

    await unlink(fullSourceFilePath);
  } catch (err) {
    throw new Error(`Operation failed!`);
  }
};
