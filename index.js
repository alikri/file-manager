import readline from 'readline';
import { parseUsername } from './src/utils/parseUsername.js';
import { getCurrentDirectory } from './src/utils/getCurrentDir.js';
import { handleCommand } from './src/commandOperations/handleCommand.js';

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
      console.log(
        `\n---\nThank you for using File Manager, ${username}, goodbye!\n---\n`
      );
      readLine.close();
    } else {
      await handleCommand(input);
      commandLineLoop();
    }
  });
};


console.log(`Welcome to the File Manager, ${username}!\n`);
commandLineLoop();

readLine.on('SIGINT', () => {
  console.log(`\n---\n Thank you for using File Manager, ${username}, goodbye!\n---\n`);
  readLine.close();
});
