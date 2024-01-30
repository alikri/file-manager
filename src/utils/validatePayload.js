export const validatePayload = (payload) => {
  if (payload.length > 1 ) {
    throw new Error('Invalid input. Only one argument accepted.');
  }
}
