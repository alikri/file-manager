import { writeFile, access } from 'node:fs/promises';
import path from 'path';
import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const createFile = async (fileName) => {
  const currentDirectory = getCurrentDirectory();
  const filePath = path.join(currentDirectory, fileName);
  try {
    await access(filePath);
    console.log(
      `Operation failed! File with the name "${fileName}" already exists`
    );
  } catch {
    try {
      await writeFile(filePath, '');
    } catch {
      throw new Error(`Operation failed!`);
    }
  }
};