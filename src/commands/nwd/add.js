import { writeFile, access } from 'node:fs/promises';
import path from 'path';
import { getCurrentDirectory } from '../../config.js';

export const addFile = async (fileName) => {
  const currentDirectory = getCurrentDirectory();
  const filePath = path.join(currentDirectory, fileName);
  try {
    await access(filePath);
    console.log(
      `File with the name "${fileName}" already exists, try another name ${currentDirectory}`
    );
  } catch {
    try {
      await writeFile(filePath, '');
      console.log(`File successfully created at ${filePath}`);
    } catch (err) {
      console.log(`Operation failed! Error in addFile(): ${err}`);
    }
  }
};