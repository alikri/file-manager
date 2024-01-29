export const validatePayload = (payload) => {
  if (payload.length > 0 && payload[0].trim() !== '') {
    return payload[0].trim(); 
  } else {
    throw new Error('Command requires a path argument');
  }
}
