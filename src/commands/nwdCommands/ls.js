import fs from 'fs/promises';
import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const listDirectoryContent = async () => {
  try {
    const currentDirectory = getCurrentDirectory();

    const directoryContent = await fs.readdir(currentDirectory, {
      withFileTypes: true,
    });

    const tableData = directoryContent
      .map((item) => ({
        Name: item.name,
        Type: item.isDirectory() ? 'directory' : 'file',
      }))
      .sort((a, b) => {
        if (a.Type === b.Type) return a.Name.localeCompare(b.Name);
        return a.Type === 'directory' ? -1 : 1;
      });

    console.table(tableData);
  } catch (error) {
    console.log(`Failed to list directory content: ${error}`);
  }
};
