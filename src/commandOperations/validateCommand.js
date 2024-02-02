export const validateNoArgsCommand = (payload) => {
  if (payload.length !== 0) {
    throw new Error('\n\n!! Invalid input!\n\n');
  }
};

export const validateOneArgCommand = (payload) => {
  if (payload.length > 1) {
    throw new Error('\n\n!! Invalid input!\n\n');
  }
};

export const validateTwoArgsCommand = (payload) => {
  if (payload.length !== 2) {
    throw new Error('\n\n!! Invalid input!\n\n');
  }
};