import os from 'os';

export const printSystemUsername = () => {
  const user = os.userInfo();
  console.log(`\n---\nCurrent System Username: ${user.username}\n---\n`);
};
