import os from 'os';

export const printEOL = () => {
  console.log(
    `\n***\n OS end-of-line marker is: ${JSON.stringify(
      os.EOL
    )}\n***\n`
  );
};
