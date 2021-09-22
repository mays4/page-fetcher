

const request = require('request');
const fs = require('fs');
const url = process.argv.slice(2);
const path = process.argv.slice(3);


request(`${url}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(`${path}`, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
  });
});