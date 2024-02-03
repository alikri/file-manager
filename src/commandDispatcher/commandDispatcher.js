import {
  changeDirectory,
  listDirectoryContent,
  navigateUp,
} from '../commands/nwdCommands/index.js';
import {
  createFile,
  printFileContent,
  renameFile,
  copyFile,
  moveFile,
  deleteFile,
} from '../commands/basicCommands/index.js';
import {
  printEOL,
  printCPUs,
  printDirectory,
  printSystemUsername,
  printCPUArchitecture,
} from '../commands/osCommands/index.js';
import { canculateHash } from '../commands/hashCommands/index.js';
import { compressFile, decompressFile } from '../commands/codecCommands/index.js';

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
    validateOneArgCommand(payload);
    const filePath = payload[0];
    await canculateHash(filePath);
  },
  compress: async (payload) => {
    validateTwoArgsCommand(payload);
    const sourceFilePath = payload[0];
    const destinationFilePath = payload[1];
    await compressFile(sourceFilePath, destinationFilePath);
  },
  decompress: async (payload) => {
    validateTwoArgsCommand(payload);
    const sourceFilePath = payload[0];
    const destinationFilePath = payload[1];
    await decompressFile(sourceFilePath, destinationFilePath);
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
          printSystemUsername();
          break;
        case '--architecture':
          printCPUArchitecture();
          break;
        default:
          throw new Error('Invalid input: invalid or missing flag');
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
