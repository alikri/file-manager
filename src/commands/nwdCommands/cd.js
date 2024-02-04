import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { setCurrentDirectory, getCurrentDirectory } from '../../utils/getCurrentDir.js';


export const changeDirectory = async (newDir) => {
  const newAbsolutePath = path.resolve(getCurrentDirectory(), newDir);
  const relativeToRoot = path.relative(os.homedir(), newAbsolutePath);

  const dirStats = await fs.stat(newAbsolutePath).catch(() => {
    throw new Error(
      `Operation failed: specified directory does not exist`
    );
  });

  if (!dirStats.isDirectory()) {
    throw new Error(`Operation failed: ${newDir} is not a directory`);
  }

  if (
    relativeToRoot.startsWith('..') ||
    (path.isAbsolute(newDir) && !newAbsolutePath.startsWith(os.homedir()))
  ) {
    throw new Error('Cannot navigate above the root directory');
  }

  setCurrentDirectory(newAbsolutePath);
};
