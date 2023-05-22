function isValidLinkedInProfileURL(url) {
    var regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return regex.test(url);
  }
  
  var input = prompt("Enter a LinkedIn profile URL:");
  
  if (isValidLinkedInProfileURL(input)) {
    console.log("The input is a valid LinkedIn profile URL.");
  } else {
    console.log("The input is not a valid LinkedIn profile URL.");
  }
  