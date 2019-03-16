const ch = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

console.log(ch.blue('Success'));

console.log(ch.red.bgBlue.inverse.dim('Error!'));

console.log("hello");
