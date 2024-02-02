import { join, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { pipeline } from 'stream/promises';
import { createReadStream } from 'node:fs';

import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const canculateHash = async (filePath) => {
  const fullFilePath = isAbsolute(filePath)
    ? filePath
    : join(getCurrentDirectory(), filePath);

  const hash = createHash('sha256');

  try {
    await pipeline(createReadStream(fullFilePath), hash);
    const fileHash = hash.digest('hex');
    console.log(`\n---\n${fileHash} - hash for ${filePath}\n---\n`);

  } catch (err) {
    throw new Error(`\n\n!! Operation failed: ${err.message}\n`);
  }
};
