import os from 'os';

export const printEOL = () => {
  console.log(
    `OS end-of-line marker is: ${JSON.stringify(
      os.EOL
    )}`
  );
};
