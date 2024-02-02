import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { setCurrentDirectory, getCurrentDirectory } from '../../utils/getCurrentDir.js';


export const changeDirectory = async (newDir) => {
  const newAbsolutePath = path.resolve(getCurrentDirectory(), newDir);
  const relativeToRoot = path.relative(os.homedir(), newAbsolutePath);

  const dirStats = await fs.stat(newAbsolutePath).catch(() => {
    throw new Error(
      `\n\n!! Operation failed: specified directory does not exist: ${newDir}\n\n`
    );
  });

  if (!dirStats.isDirectory()) {
    throw new Error(`\n\n!! Operation failed: ${newDir} is not a directory\n\n`);
  }

  if (
    relativeToRoot.startsWith('..') ||
    (path.isAbsolute(newDir) && !newAbsolutePath.startsWith(os.homedir()))
  ) {
    throw new Error('\n\n!! Cannot navigate above the root directory\n\n');
  }

  setCurrentDirectory(newAbsolutePath);
  console.log(`\nDirectory changed to ${newAbsolutePath}\n`);
};
