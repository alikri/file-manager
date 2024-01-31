import os from 'os';
export const printDirectory = () => { 
  const homdeDir = os.homedir()
  console.log(`\n---\n Home Directory: ${homdeDir}\n---\n`);
}
