import { changeDirectory } from '../commands/nwd/cd.js';
import { listDirectoryContent } from '../commands/nwd/ls.js';
import { navigateUp } from '../commands/nwd/up.js';
import { createFile } from '../commands/basicCommands/add.js';
import { printFileContent } from '../commands/basicCommands/cat.js';
import { renameFile } from '../commands/basicCommands/rn.js';
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
    validateNoArgsCommand(payload)
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
    console.log(`Copying file from ${payload[0]} to ${payload[1]}`);
  },
  mv: async (payload) => {
    console.log(`Moving file from ${payload[0]} to ${payload[1]}`);
  },
  rm: async (payload) => {
    console.log(`Removing file: ${payload[0]}`);
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
    let output;
    switch (payload[0]) {
      case '--EOL':
        output = `--EOL`;
        break;
      case '--cpus':
        output = '--cpus';
        break;
      case '--homedir':
        output = '--homedir';
        break;
      case '--username':
        output = '--username';
        break;
      case '--architecture':
        output = '--architecture';
        break;
      default:
        throw new Error('Invalid input: invalid flag')
    }

    console.log(output);
  }
};
