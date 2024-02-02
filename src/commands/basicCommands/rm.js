import { access, constants, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const deleteFile = async (fileName) => {
  const filePath = join(getCurrentDirectory(), fileName);

  try {
    await access(filePath, constants.F_OK);
    await unlink(filePath);
    console.log(`\n---\nFile ${fileName} successfully deleted\n---\n`);
    
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`\n\n!! Operation failed: file does not exist\n\n`);
    } else {
      throw new Error(`\n\n!! Operation failed: ${err.message}\n\n`);
    }
  }
};
