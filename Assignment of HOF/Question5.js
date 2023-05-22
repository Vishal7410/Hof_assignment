function isValidURL(url) {
    var regex = /^(http:\/\/|https:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][A-Za-z]+$/;
    return regex.test(url);
  }
  
  var input = prompt("Enter a URL:");
  
  if (isValidURL(input)) {
    console.log("The input matches the conditions. It is a valid URL.");
  } else {
    console.log("The input does not match the conditions. It is not a valid URL.");
  }
  