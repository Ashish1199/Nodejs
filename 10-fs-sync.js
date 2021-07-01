
//Synchronous method of reading and writing a file.
const {readFileSync , writeFileSync} = require('fs');
console.log('start')
let first = readFileSync('./content/first.txt','utf8');
let second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result:${first}, ${second}`,
    {flag:'a'}
);

console.log("Done with this task");
console.log("We are stating the next one!!")