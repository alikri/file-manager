import os from 'os';

export const printSystemUsername = () => {
  const user = os.userInfo();
  console.log(`Current System Username: ${user.username}`);
};
