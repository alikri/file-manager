
import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { setCurrentDirectory, getCurrentDirectory } from '../../config';

export const changeDirectory = async (newDir) => {
  const newAbsolutePath = path.resolve(getCurrentDirectory(), newDir);
  const relativeToRoot = path.relative(os.homedir(), newAbsolutePath);

  try {
    const dirStats = await fs.stat(newAbsolutePath);
    if (!dirStats.isDirectory()) {
      console.log(`${newDir} is not a directory`);
      return;
    }

    if (
      relativeToRoot.startsWith('..') ||
      (path.isAbsolute(newDir) && !newAbsolutePath.startsWith(os.homedir()))
    ) {
      console.log('Cannot navigate above the root directory');
    } else {
      setCurrentDirectory(newAbsolutePath);
      console.log(`Directory changed to ${newAbsolutePath}`);
    }
  } catch {
    console.log(`The specified directory does not exist: ${newDir}`);
  }
};
