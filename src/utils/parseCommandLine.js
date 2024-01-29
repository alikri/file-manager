export const parseCommandLine = (input) => {
  const validCommands = ['up', 'ls'];

  const validCommandsWithPayload = [
    'cd',
    'cat',
    'add',
    'rn',
    'cp',
    'mv',
    'rm',
    'hash',
    'compress',
    'decompress',
    'os',
  ];

  const validOsCommands = [
    '--EOL',
    '--cpus',
    '--homedir',
    '--username',
    '--architecture',
  ];

  let parts = input.trim().split(/\s+/); 

  if (parts.length === 0) {
    throw error;
  }

  let command = parts[0];
  let payload = parts.slice(1);

  if (
    command === 'os' &&
    payload.length > 0 &&
    validOsCommands.includes(payload[0])
  ) {
    command += ' ' + payload[0];
    payload = payload.slice(1);
  }

  if (validCommands.includes(command)) {
    if (payload.length > 0) {
      throw error;
    }
  } else if (validCommandsWithPayload.includes(command.split(' ')[0])) {
    if (
      payload.length === 0 ||
      (command === 'os' && !validOsCommands.includes(payload[0]))
    ) {
      throw error;
    }
  } else {
    throw error;
  }

  return {
    command,
    payload,
  };
};
