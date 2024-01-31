import os from 'os';

export const printEOL = () => {
  console.log(
    `Operation System end-of-line marker is: ${JSON.stringify(os.EOL)}`);
};
