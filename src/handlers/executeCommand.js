import { handlers } from './handlers.js';

export const executeCommand = async (commandObj) => {
  const handler = handlers[commandObj.command];
  if (handler) {
    try {
      await handler(commandObj.payload);
    } catch (error) {
      console.log('Operation failed:', error.message);
    }
  } else {
    console.log('Unknown command or invalid input');
  }
};
