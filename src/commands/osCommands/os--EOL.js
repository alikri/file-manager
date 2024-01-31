import os from 'os';

export const printEOL = () => {
  return `Operation System end-of-line marker is: ${JSON.stringify(os.EOL)}`;
};
