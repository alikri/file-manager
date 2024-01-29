import readline from 'readline';
import { parseUsername } from './src/utils/parseUsername.js';
import { getCurrentDirectory } from './src/config.js';
import { handleCommandInput } from './src/handlers/handleCommandInput.js';

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const EXIT = '.exit';
const username = parseUsername();

const displayCurrentDirectory = () => {
  console.log(`You are currently in ${getCurrentDirectory()}`);
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
