export const validatePayload = (payload) => {
  if (payload.length === 1 && payload[0].trim() !== '') {
    return payload[0].trim(); 
  } else {
    throw new Error('Invalid input');
  }
}
