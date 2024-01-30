import { handlers } from './handlers.js';

export const executeCommand = async (commandObj) => {
  const handler = handlers[commandObj.command];
  if (handler) {
    await handler(commandObj.payload);
  } else {
    console.log('No such command');
  }
};
