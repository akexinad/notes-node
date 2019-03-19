const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note.',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note.',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read the note.',
  handler() {
    console.log('Here is the note...');
  }
});


// Create list command
yargs.command({
  command: 'list',
  describe: 'Shows a listing of the note.',
  handler() {
    // console.log('Here is a list of all your notes...');
    notes.listNotes();
  }
});

yargs.parse();
