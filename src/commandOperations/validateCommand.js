export const validateNoArgsCommand = (payload) => {
  if (payload.length !== 0) {
    throw new Error('Invalid input! This command does not accept arguments');
  }
};

export const validateOneArgCommand = (payload) => {
  if (payload.length !== 1) {
    throw new Error('Invalid input! One argument required');
  }
};

export const validateTwoArgsCommand = (payload) => {
  if (payload.length !== 2) {
    throw new Error('Invalid input! Two arguments required');
  }
};