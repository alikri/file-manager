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

  let result = {
    command: '',
    payload: [],
  };

  let parts = input.split(' ');

  if (parts.length === 0 || input.trim() === '') {
    result.error = true;
    return result;
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

  if (
    !validCommands.includes(command) &&
    !validCommandsWithPayload.includes(command.split(' ')[0])
  ) {
    throw new Error('Invalid input or command not implemented');
  }

  result.command = command;
  result.payload = payload;

  return result;
}
