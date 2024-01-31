export const parseCommand = (input) => {
  const parts = input.trim().split(/\s+/); 

  if (parts.length === 0) {
    throw error;
  }

  const command = parts[0];
  const payload = parts.slice(1).map((str) => str.trim());

  return {
    command,
    payload,
  };
};
