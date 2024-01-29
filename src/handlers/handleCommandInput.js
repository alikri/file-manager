import { parseCommandLine } from '../utils/parseCommandLine.js';
import { executeCommand } from './executeCommand.js';

export const handleCommandInput = async (input) => {
  try {
    let commandObj = parseCommandLine(input);
    await executeCommand(commandObj);
  } catch (err) {
    console.log('Invalid input');
  }
};