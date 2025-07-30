
// Validate incoming data
function validateData(data) {
  const required = ['guestType', 'firstName', 'lastName', 'firstNameFurigana', 'lastNameFurigana', 'email'];
  
  for (let field of required) {
    if (!data[field] || String(data[field]).trim() === '') {
      return {
        isValid: false,
        message: `${field} is required`
      };
    }
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      isValid: false,
      message: 'Invalid email format'
    };
  }
  
  // Guest type validation
  if (!['groom', 'bride'].includes(data.guestType)) {
    return {
      isValid: false,
      message: 'Invalid guest type'
    };
  }
  
  // Check for duplicate name combination
  const duplicateCheck = validateDuplicate(data);
  if (duplicateCheck.isDuplicate) {
    return {
      isValid: false,
      message: duplicateCheck.message || 'This name combination already exists in our records.'
    };
  }
  
  // If there was an error during duplicate validation, log it but don't block submission
  if (duplicateCheck.error) {
    console.log('Warning: Duplicate validation error:', duplicateCheck.error);
  }
  
  return { isValid: true };
}