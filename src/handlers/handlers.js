import { changeDirectory } from '../commands/nwd/cd/cd.js';
import { validatePayload } from '../utils/validatePayload.js';
import { listDirectoryContent } from '../commands/nwd/noArgCommands/ls.js';
import { navigateUp } from '../commands/nwd/noArgCommands/up.js';
import { createFile } from '../commands/basicOperations/add.js';
import { printFileContent } from '../commands/basicOperations/cat.js';

export const handlers = {
  up: async () => {
    await navigateUp();
  },
  ls: async () => {
    await listDirectoryContent();
  },
  cd: async (payload) => {
    validatePayload(payload);
    const directory = payload[0];
    await changeDirectory(directory);
  },
  cat: async (payload) => {
    try {
      const fileName = payload[0];
      await printFileContent(fileName);
    } catch (err) {
      console.log(`Operation failed! Error in handler: ${err.message}`);
    }
  },
  add: async (payload) => {
    try {
      const fileName = payload[0];
      await createFile(fileName);
    } catch (err) {
      console.log(`Operation failed! Error in handler: ${err.message}`)
    }
  
  },
  rn: async (payload) => {
    console.log(`Renaming file from ${payload[0]} to ${payload[1]}`);
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
