const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJsON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find( (note) => note.title === title );

  if (!duplicateNote) {
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

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find( (note) => note.title === title );

  if (note) {
    console.log(chalk.bgGreen('Here is your note...'));
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('| ERROR: Cannot find note |'));
  }

}

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
  notes.forEach( (note) => {
    console.log(chalk.blue(note.title));
  })

};

module.exports = {
  saveNotes: saveNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
