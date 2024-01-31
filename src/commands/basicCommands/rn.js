import { join, dirname } from 'node:path';
import { rename } from 'node:fs/promises';
import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const renameFile = async (pathToFile, newFileName) => {
  const currentDir = getCurrentDirectory();
  const fullOldPath = join(currentDir, pathToFile);
  const fullNewPath = join(dirname(fullOldPath), newFileName);

  try {
    await rename(fullOldPath, fullNewPath);
    console.log('File renamed!');
    
  } catch (err) {
    throw new Error(`Operation Failed: ${err}`);
  }
};
