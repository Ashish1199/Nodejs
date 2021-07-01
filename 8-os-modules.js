const os  = require('os');


//info about current user
var user = os.userInfo();
console.log(user);

//method returns system uptime in seconds
console.log(`The System's Uptime is ${os.uptime()} seconds.`)

let currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs)