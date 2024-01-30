export const parseCommandLine = (input) => {
  let parts = input.trim().split(/\s+/); 

  if (parts.length === 0) {
    throw error;
  }

  let command = parts[0];
  let payload = parts.slice(1).map((str) => str.trim());

  return {
    command,
    payload,
  };
};
