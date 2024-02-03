import { access, constants, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { getCurrentDirectory } from '../../utils/getCurrentDir.js';

export const deleteFile = async (fileName) => {
  const filePath = join(getCurrentDirectory(), fileName);

  try {
    await access(filePath, constants.F_OK);
    await unlink(filePath);
    
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`Operation failed: file does not exist`);
    } else {
      throw new Error(
        `Operation failed: no such file or directory!`
      );
    }
  }
};
