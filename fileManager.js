import readline from 'readline';
import os from 'os';
import { parseUsername } from './src/utils/parseUsername.js';
import { getCurrentDirectory } from './config.js';
import { parseCommandLine } from './src/utils/parseCommandLine.js';

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const EXIT = '.exit';
const username = parseUsername();

const displayCurrentDirectory = () => {
  console.log(`You are currently in ${getCurrentDirectory()}`);
}


const handleCommandInput = async (input) => {
  try {
    let commandObj = parseCommandLine(input);
    if (!commandObj.error) {
      console.log(commandObj);
    } else {
      throw new Error('Invalid input or command not implemented');
    }
  } catch (err) {
    console.log('Operation failed');
  }
}


const commandLineLoop = () => {
  displayCurrentDirectory(); 
  readLine.question('Enter command: ', async (input) => {
    if (input === EXIT) {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      readLine.close();
    } else {
      await handleCommandInput(input);
      commandLineLoop();
    }
  });
};


console.log(`Welcome to the File Manager, ${username}!`);
commandLineLoop();

readLine.on('SIGINT', () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  readLine.close();
});
