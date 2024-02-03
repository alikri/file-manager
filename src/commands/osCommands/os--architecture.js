import os from 'os';

export const printCPUArchitecture = () => {
  const architecture = os.arch();
  console.log(
    `${architecture} - Node.js CPU Architecture`
  );
};
