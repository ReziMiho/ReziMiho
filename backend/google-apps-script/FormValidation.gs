function validateData(data) {
  const required = ['guestType', 'firstName', 'lastName'];
  
  for (let field of required) {
    if (!data[field] || String(data[field]).trim() === '') {
      return {
        isValid: false,
        message: `${field} is required`
      };
    }
  }
  
  if (!['groom', 'bride'].includes(data.guestType)) {
    return {
      isValid: false,
      message: 'Invalid guest type'
    };
  }
  
  return { isValid: true };
}