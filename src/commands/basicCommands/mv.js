import { access, constants, unlink } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { join, basename, isAbsolute } from 'node:path';

import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const moveFile = async (sourceFilePath, destinationDir) => {
  const fileName = basename(sourceFilePath);
  const fullSourceFilePath = isAbsolute(sourceFilePath)
    ? sourceFilePath
    : join(getCurrentDirectory(), sourceFilePath);

  const fullDestinationPath = isAbsolute(destinationDir)
    ? destinationDir
    : join(getCurrentDirectory(), destinationDir);

  const fullDestinationFilePath = join(fullDestinationPath, fileName);

  try {
    await access(fullSourceFilePath, constants.F_OK);

    await pipeline(
      createReadStream(fullSourceFilePath),
      createWriteStream(fullDestinationFilePath)
    );

    await unlink(fullSourceFilePath);

    console.log(`File moved successfully to ${fullDestinationFilePath}`);

  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(
        `Operation failed: only relative or absolute path accepted`
      );
    } else {
      throw new Error(`Operation failed: ${err.message}`);
    }
  }
};
