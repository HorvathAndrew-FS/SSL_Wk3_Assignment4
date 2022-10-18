const http = require('http');
const myName = ( () => {
  console.log("Here is my IP address");
});

callHttpBin( () => {
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      const str="";
      response.setEncoding('utf8');
      response.on('data', (data) => {
      str += data;
     });
     response.on('end', function() {
      const result = JSON.parse(str);
      const myIps = result.origin;
      resolve()
     });
     }
    );
});

let result = await promise;
result;
});

executeAsyncTask( () => {
  const valueA = await callHttpBin()
  const valueB = myName();
  console.log(valueB+" "+valueA)
});

// Output Here is my IP address 149.24.160.1