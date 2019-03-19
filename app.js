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

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read selected note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

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


// Create list command
yargs.command({
  command: 'list',
  describe: 'Shows a listing of the note.',
  handler() {
    notes.listNotes();
  }
});

yargs.parse();
