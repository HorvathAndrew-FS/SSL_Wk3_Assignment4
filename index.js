// const http = require('http');
const myName = function(){
  console.log("Here is my IP address");
};

async function callHttpBin() {
  let promise = new Promise((resolve, reject) => {
    console.log("Here");
    fetch(
     'http://httpbin.org/ip',
     (response) => {
      const str="";
      response.setEncoding('utf8');
      response.on('data', (data) => {
      str += data;
      console.log(data);
     });

     response.on('end', function() {
      let result = JSON.parse(str);
      let myIps = result.origin;
      resolve();
     });
     }
    );
});
   let result = await promise;
   return result;
};

async function executeAsyncTask(){
  const valueA = await callHttpBin();
  const valueB = myName();
//   console.log(valueB+" "+valueA);
console.log(valueB);
};
// Output Here is my IP address 149.24.160.1

executeAsyncTask();