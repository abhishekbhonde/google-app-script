function onFormSubmit(e) {

  const apiUrl = "https://secondbrain-o8wu.onrender.com/api/v1/signup";
  
  const formResponses = e.values;
  const headers = e.range.getSheet().getRange(1, 1, 1, e.range.getLastColumn()).getValues()[0]; // Form question headers
  
 
  const data = {};
  headers.forEach((header, index) => {
    data[header] = formResponses[index];
  });

  // Save data to Google Sheet (already happens automatically, but you can customize here)
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(formResponses);

  // Make a POST request to the backend API
  try {
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(data),
    };

    const response = UrlFetchApp.fetch(apiUrl, options);
    console.log("Data sent to API successfully:", response.getContentText());
  } catch (error) {
    console.error("Error sending data to API:", error);
  }
}

