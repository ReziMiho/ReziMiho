
function saveToSpreadsheet(data) {
  try {
    const sheet = getSheet();
    
    const timestamp = new Date();
    const rowData = [
      timestamp.toISOString(),
      data.guestType,
      data.firstName,
      data.lastName,
      data.firstNameFurigana || '',
      data.lastNameFurigana || '',
      data.email,
      data.phone || '',
      data.dietary || '',
      data.message || ''
    ];
    
    const duplicateCheck = validateDuplicate(data);
    
    let targetRow;
    if (duplicateCheck.isDuplicate) {
      targetRow = duplicateCheck.rowNumber;
      const range = sheet.getRange(targetRow, 1, 1, rowData.length);
      range.setValues([rowData]);
    } else {
      sheet.appendRow(rowData);
      targetRow = sheet.getLastRow();
    }
    
    return {
      success: true,
      id: targetRow,
      updated: duplicateCheck.isDuplicate
    };
    
  } catch (error) {
    console.error('Error saving to spreadsheet:', error);
    return {
      success: false,
      message: 'Failed to save data'
    };
  }
}

function validateDuplicate(data) {
  try {
    const sheet = getSheet();
    const lastRow = sheet.getLastRow();
    
    
    if (lastRow <= 1) {
      return {
        isDuplicate: false
      };
    }
    
    
    const firstNameRange = sheet.getRange(2, 3, lastRow - 1, 1);
    const lastNameRange = sheet.getRange(2, 4, lastRow - 1, 1);
    
    const firstNameValues = firstNameRange.getValues().flat();
    const lastNameValues = lastNameRange.getValues().flat();
    
    
    for (let i = 0; i < firstNameValues.length; i++) {
      const existingFirstName = firstNameValues[i].toString().trim().toLowerCase();
      const existingLastName = lastNameValues[i].toString().trim().toLowerCase();
      const newFirstName = data.firstName.toString().trim().toLowerCase();
      const newLastName = data.lastName.toString().trim().toLowerCase();
      
      if (existingFirstName === newFirstName && existingLastName === newLastName) {
        return {
          isDuplicate: true,
          rowNumber: i + 2,
          message: 'Existing record will be updated.'
        };
      }
    }
    
    return {
      isDuplicate: false
    };
    
  } catch (error) {
    console.error('Error validating duplicate:', error);
    return {
      isDuplicate: false,
      error: 'Unable to validate duplicate records'
    };
  }
}

function getSheet() {
  const files = DriveApp.getFilesByName('Wedding RSVP Data');
  let spreadsheet = SpreadsheetApp.open(files.next());

  return spreadsheet.getSheetByName('Wedding RSVP Responses');
}