import os from 'os';
import { changeDirectory } from '../commands/cd.js';
import { validatePayload } from '../utils/validatePayload.js';
import { listDirectoryContent } from '../commands/ls.js';
import { navigateUp } from '../commands/up.js';
import { addFile } from '../commands/add.js';

export const handlers = {
  up: async () => {
    await navigateUp();
  },
  ls: async () => {
    await listDirectoryContent();
  },
  cd: async (payload) => {
    try {
      const directory = validatePayload(payload); 
      await changeDirectory(directory);
    } catch (err) {
      console.log(`Opertion failed: ${err.message}`);
    }
  },
  cat: async (payload) => {
    console.log(`Displaying content of the file: ${payload[0]}`);
  },
  add: async (payload) => {
    try {
      const fileName = validatePayload(payload);
      await addFile(fileName);
    } catch (err) {
      console.log(`Opertion failed: ${err.message}`)
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
  'os --EOL': () => {
    console.log(
      `End-of-line marker for the current OS: ${JSON.stringify(os.EOL)}`
    );
  },
  'os --cpus': () => {
    console.log('CPU details:');
    console.log(os.cpus());
  },
  'os --homedir': () => {
    console.log(`Home directory of the current user: ${os.homedir()}`);
  },
  'os --username': () => {
    console.log(`Username of the current user: ${os.userInfo().username}`);
  },
  'os --architecture': () => {
    console.log(`Architecture of the current OS: ${os.arch()}`);
  },
};
