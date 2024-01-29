import os from 'os';

let currentDirectory = os.homedir();

export const getCurrentDirectory = () => currentDirectory;

export const setCurrentDirectory = (newDirectory) => {
  currentDirectory = newDirectory;
};
