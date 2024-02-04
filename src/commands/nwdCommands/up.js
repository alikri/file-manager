import os from 'os';
import path from 'path';
import { setCurrentDirectory, getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const navigateUp = async () => {
  const parentDir = path.resolve(getCurrentDirectory(), '..');
  const relativeToRoot = path.relative(os.homedir(), parentDir);

  if (
    relativeToRoot.startsWith('..') ||
    (path.isAbsolute(parentDir) && !parentDir.startsWith(os.homedir()))
  ) {
    throw new Error('Cannot navigate above the root directory');
  }

  setCurrentDirectory(parentDir);
};
