import { commandDispatcher } from '../commandDispatcher/commandDispatcher.js';

export const executeCommand = async (commandObj) => {
  const dispatcher = commandDispatcher[commandObj.command];
  if (dispatcher) {
    await dispatcher(commandObj.payload);
  } else {
    console.log('Ivalid input! No such command');
  }
};
