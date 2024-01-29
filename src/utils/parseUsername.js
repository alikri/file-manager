
export const parseUsername = () => {
  const username =
    process.argv
      .slice(2)
      .find((arg) => arg.startsWith('--username='))
      ?.split('=')[1] || 'User';

  return username;
};
