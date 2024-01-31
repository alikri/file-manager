import fs from 'fs/promises';
import { getCurrentDirectory } from '../../../config.js';

export const listDirectoryContent = async () => {
  try {
    const currentDirectory = getCurrentDirectory();
    console.log('Content of the directory:', currentDirectory);

    const directoryContent = await fs.readdir(currentDirectory, { withFileTypes: true });

    const tableData = directoryContent
      .map((item) => ({
        Name: item.name,
        Type: item.isDirectory() ? 'folder' : 'file',
      }))
      .sort((a, b) => {
        if (a.Type === b.Type) return a.Name.localeCompare(b.Name);
        return a.Type === 'Folder' ? -1 : 1;
      });

    console.table(tableData);
  } catch (error) {
    console.error('Failed to list directory content:', error);
  }
};