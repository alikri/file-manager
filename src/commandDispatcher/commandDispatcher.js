import { changeDirectory } from '../commands/nwdCommands/cd.js';
import { listDirectoryContent } from '../commands/nwdCommands/ls.js';
import { navigateUp } from '../commands/nwdCommands/up.js';
import { createFile } from '../commands/basicCommands/add.js';
import { printFileContent } from '../commands/basicCommands/cat.js';
import { renameFile } from '../commands/basicCommands/rn.js';
import { copyFile } from '../commands/basicCommands/cp.js';
import { moveFile } from '../commands/basicCommands/mv.js';
import { deleteFile } from '../commands/basicCommands/rm.js';
import { printEOL } from '../commands/osCommands/os--EOL.js';
import { printCPUs } from '../commands/osCommands/os--cpus.js';
import { printDirectory } from '../commands/osCommands/os --homedir.js';
import {
  validateNoArgsCommand,
  validateOneArgCommand,
  validateTwoArgsCommand,
} from '../commandOperations/validateCommand.js';

export const commandDispatcher = {
  up: async (payload) => {
    validateNoArgsCommand(payload);
    await navigateUp();
  },
  ls: async (payload) => {
    validateNoArgsCommand(payload);
    await listDirectoryContent();
  },
  cd: async (payload) => {
    validateOneArgCommand(payload);
    const directory = payload[0];
    await changeDirectory(directory);
  },
  cat: async (payload) => {
    validateOneArgCommand(payload);
    const fileName = payload[0];
    await printFileContent(fileName);
  },
  add: async (payload) => {
    validateOneArgCommand(payload);
    const fileName = payload[0];
    await createFile(fileName);
  },
  rn: async (payload) => {
    validateTwoArgsCommand(payload);
    const pathToFile = payload[0];
    const newFileName = payload[1];
    await renameFile(pathToFile, newFileName);
  },
  cp: async (payload) => {
    validateTwoArgsCommand(payload);
    const sourceFilePath = payload[0];
    const destinationDir = payload[1];
    await copyFile(sourceFilePath, destinationDir);
  },
  mv: async (payload) => {
    validateTwoArgsCommand(payload);
    const sourceFilePath = payload[0];
    const destinationDir = payload[1];
    await moveFile(sourceFilePath, destinationDir);
  },
  rm: async (payload) => {
    validateOneArgCommand(payload);
    const fileName = payload[0];
    await deleteFile(fileName);
  },
  hash: async (payload) => {
    console.log(`Calculating hash for file: ${payload[0]}`);
  },
  compress: async (payload) => {
    console.log(`Compressing file from ${payload[0]} to ${payload[1]}`);
  },
  decompress: async (payload) => {
    console.log(`Decompressing file from ${payload[0]} to ${payload[1]}`);
  },
  os: async (payload) => {
    try {
      validateOneArgCommand(payload);

      switch (payload[0]) {
        case '--EOL':
          printEOL();
          break;
        case '--cpus':
          printCPUs();
          break;
        case '--homedir':
          printDirectory();
          break;
        case '--username':
          console.log('ggg');
          break;
        case '--architecture':
          console.log('ggg');
          break;
        default:
          throw new Error('Invalid input: invalid or missing flag');
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
