const http = require('http'); // change var to const and added p to http 
const myName = function(){ //change var to const, camel case for variable name, added letter i to misspelled function
    return "Here is my IP address"; //changed console log to return a sentence as it doesn't make sense to try and console log a console log.
}; //added closing semi-colon

function callHttpBin() { //camel case for entire function name and added n to fix/finish name properly
    return new Promise((resolve, reject) => { //removed the setting of a variable to just return the promise
        http.get(
            'http://httpbin.org/ip',
                function(response) {
                    let str=""; //changed var to let to allow value changes
                    response.setEncoding('utf8');
                        response.on('data', function(data){
                            str += data;
                        });
                    response.on('end', function() {
                    const result = JSON.parse(str); //changed var to const
                    const myIps = result.origin; //added variable declaration 
                    resolve(myIps); //added the ip address variable in the response and closing semi-colon 
                   
                    });
                } 
        );
    
    });
    
//   let result = promise; removed this as the resolve handles the passing of the data
//     return result;
};

async function executeAsyncTask(){ //added async
    const valueA = await callHttpBin(); //fixed function name to match declaration
    const valueB = myName(); //fixed variable name to match declaration 
  console.log(valueB + " " + valueA); //added closing semi-colon
} //added closing bracket

// Output: Here is IP address 149.24.160.1
executeAsyncTask();