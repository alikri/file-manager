import os from 'os';

export const printCPUArchitecture = () => {
  const architecture = os.arch();
  console.log(
    `\n---\n${architecture} - Node.js CPU Architecture\n---\n`
  );
};
