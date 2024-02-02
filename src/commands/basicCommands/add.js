import { writeFile, access } from 'node:fs/promises';
import path from 'path';
import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const createFile = async (fileName) => {
  const currentDirectory = getCurrentDirectory();
  const filePath = path.join(currentDirectory, fileName);
  try {
    await access(filePath);
    console.log(
      `\n\n!! File with the name "${fileName}" already exists, try another name ${currentDirectory}\n\n`
    );
  } catch {
    try {
      await writeFile(filePath, '');
      console.log(`\n---\nFile successfully created at ${filePath}\n---\n`);
    } catch (err) {
      throw new Error(`\n\n!! Operation failed!: ${err}\n\n`);
    }
  }
};