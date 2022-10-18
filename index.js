const http = require('http');
const myName = function(){
  console.log("Here is my IP address");
}
function callHttpBin() {
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      let result = JSON.parse(str);
      let myIps = result.origin;
      resolve()
     });
     }
    );
});

let result = await promise;
result;
}
function executeAsyncTask(){
  const valueA = await callHttpBin()
  const valueB = myName();
  console.log(valueB+" "+valueA)
// Output Here is my IP address 149.24.160.1
