const path = require('path');

//path separator
console.log(path.sep);


//joining path 
const filePath = path.join('/content','subfolder' , 'test.txt');
console.log(filePath);

//path basename
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname , "content" , 'subfolder' ,'test.txt');
console.log(absolute);