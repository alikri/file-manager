export const validateNoArgsCommand = (payload) => {
  if (payload.length !== 0) {
    throw new Error('Invalid input.');
  }
};

export const validateOneArgCommand = (payload) => {
  if (payload.length > 1) {
    throw new Error('Invalid input!');
  }
};
