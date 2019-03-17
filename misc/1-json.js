const fs = require('fs');


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Fellini';
data.age = '88.5';

console.log(data);
console.log(data.name);
console.log(data.age);
