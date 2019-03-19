const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return "Your notes...";
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter( (note) => note.title === title );

  if (duplicateNotes.length === 0) {

    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes);
    console.log(chalk.bgGreen('New note added!'));
  } else {
    console.log(chalk.bgRed('Note title taken!'));
  }

};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter( (note) => note.title !== title );

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen("Note was successfully removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed("No note was found!"));
  }
};

const listNotes = () => {
  console.log(chalk.inverse('Here are all your notes...'));
  const notes = loadNotes();
  notes.forEach( note => {
    console.log(chalk.bgBlue.white(note.title + ':') + chalk.blue(note.body));
  })

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
