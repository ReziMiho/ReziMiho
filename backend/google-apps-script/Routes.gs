function doPost(e) {
  try {
    const params = e.parameter || {};
    const acceptLanguage = e.parameter.lang || 'en';
    const validation = validateData(params);
    if (!validation.isValid) {
      console.log('Validation failed:', validation.message);
      return createErrorPage(validation.message, acceptLanguage);
    }
    
    const result = saveToSpreadsheet(params);
    console.log('Save result:', result);
    
    if (result.success) {
      return createSuccessPage(result.id, params, acceptLanguage);
    } else {
      return createErrorPage(result.message, acceptLanguage);
    }
    
  } catch (error) {
    console.error('Error processing POST request:', error);
    return createErrorPage('Internal server error: ' + error.message, acceptLanguage || 'en');
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Wedding RSVP API is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
