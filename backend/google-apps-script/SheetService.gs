
// Save data to Google Sheets
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
        data.address || '',
        data.dietary || '',
        data.message || ''
      ];
      
      sheet.appendRow(rowData);
      const lastRow = sheet.getLastRow();
      
      return {
        success: true,
        id: lastRow
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
      
      // If no data rows exist (only header), no duplicates possible
      if (lastRow <= 1) {
        return {
          isDuplicate: false
        };
      }
      
      // Get the range for firstName (column C, index 3) and lastName (column D, index 4)
      const firstNameRange = sheet.getRange(2, 3, lastRow - 1, 1);
      const lastNameRange = sheet.getRange(2, 4, lastRow - 1, 1);
      
      const firstNameValues = firstNameRange.getValues().flat();
      const lastNameValues = lastNameRange.getValues().flat();
      
      // Check for duplicate combination
      for (let i = 0; i < firstNameValues.length; i++) {
        const existingFirstName = firstNameValues[i].toString().trim().toLowerCase();
        const existingLastName = lastNameValues[i].toString().trim().toLowerCase();
        const newFirstName = data.firstName.toString().trim().toLowerCase();
        const newLastName = data.lastName.toString().trim().toLowerCase();
        
        if (existingFirstName === newFirstName && existingLastName === newLastName) {
          return {
            isDuplicate: true,
            message: 'This name combination already exists in our records.'
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
  
  
  // Get or create the RSVP spreadsheet
  function getSheet() {
    const files = DriveApp.getFilesByName('Wedding RSVP Data');
    let spreadsheet = SpreadsheetApp.open(files.next());
  
    return spreadsheet.getSheetByName('Wedding RSVP Responses');
  }