import { parseCommand } from './parseCommand.js';
import { executeCommand } from './executeCommand.js';

export const handleCommand = async (input) => {
  try {
    let commandObj = parseCommand(input);
    await executeCommand(commandObj);
  } catch (err) {
    console.log(err.message);
  }
};