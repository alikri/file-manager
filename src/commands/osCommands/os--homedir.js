import os from 'os';
export const printDirectory = () => { 
  const homdeDir = os.homedir()
  console.log(`Home Directory: ${homdeDir}`);
}
