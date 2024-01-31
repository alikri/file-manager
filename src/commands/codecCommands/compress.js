import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { unlink } from 'fs/promises';
import { basename, join, isAbsolute } from 'path';

import { getCurrentDirectory } from '../../utils/getCurrentDir.js';


export const compressFile = async (sourceFilePath, destinationFilePath) => {
  const fullSourceFilePath = isAbsolute(sourceFilePath)
    ? sourceFilePath
    : join(getCurrentDirectory(), sourceFilePath);
  
  const fullDestinationFilePath = isAbsolute(destinationFilePath)
    ? destinationFilePath
    : join(getCurrentDirectory(), destinationFilePath);
  
  try {
    await pipeline(
      createReadStream(fullSourceFilePath),
      createBrotliCompress(),
      createWriteStream(fullDestinationFilePath)
    );
    
    console.log(
      `\n---\nCompressed successfully ${basename(
        fullSourceFilePath
      )} to ${fullDestinationFilePath}\n---\n`
    );

    await unlink(fullSourceFilePath);
    
  } catch (err) {
    throw new Error(`Operation failed: ${err.message}`)
  }
};
