function onFormSubmit(e) {
  const apiUrl = "https://app-v2.chin2shin.com/tags/campaigncrafters.biz/561332";

  // Collect form responses
  const formResponses = e.values;
  const headers = e.range.getSheet().getRange(1, 1, 1, e.range.getLastColumn()).getValues()[0]; // Form question headers

  // Prepare data payload in the correct order
  const data = {
    "name": "",
    "order": "",
    "url": "",
  };

  headers.forEach((header, index) => {
    const normalizedHeader = header.toLowerCase().replace(/\s+/g, "_"); // Normalize header keys
    if (normalizedHeader === "name" || normalizedHeader === "order" || normalizedHeader === "url") {
      data[normalizedHeader] = formResponses[index];
    }
  });

  console.log("Data to send:", JSON.stringify(data)); // Debugging payload

  // Make a POST request to store data in the backend
  try {
    const postOptions = {
      method: "post",
      contentType: "application/json",
      headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json",
        "cookie": "connect.sid=s%3AM4-RWiiVjI7lnFL9x2_eD3tUvuE7fuJ2.9RXTIVSHE0BfzXv3Wn2hEjxOKJxI1IuK3UPKrHTw%2B2Y",
        "dnt": "1",
      },
      payload: JSON.stringify(data),
    };

    const postResponse = UrlFetchApp.fetch(apiUrl, postOptions);
    console.log("POST Response Code:", postResponse.getResponseCode());
    console.log("POST Response Body:", postResponse.getContentText());
  } catch (error) {
    console.error("Error during POST request:", error);
  }

  // Make a GET request to fetch all data from the backend
  try {
    const getOptions = {
      method: "get",
      headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "cookie": "connect.sid=s%3AM4-RWiiVjI7lnFL9x2_eD3tUvuE7fuJ2.9RXTIVSHE0BfzXv3Wn2hEjxOKJxI1IuK3UPKrHTw%2B2Y",
        "dnt": "1",
        "pragma": "no-cache",
        "referer": "https://app-v2.chin2shin.com/",
        "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      },
    };

    const getResponse = UrlFetchApp.fetch(apiUrl, getOptions);
    const fetchedData = JSON.parse(getResponse.getContentText());
    console.log("GET Response Code:", getResponse.getResponseCode());
    console.log("Fetched Data:", JSON.stringify(fetchedData, null, 2));
  } catch (error) {
    console.error("Error during GET request:", error);
  }

  // Optionally save data to Google Sheet (if needed)
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(formResponses);
}

