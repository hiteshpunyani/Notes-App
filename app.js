const notes = require("./notes.js");
const yargs = require("yargs");

//add
yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create a remove command

yargs.command({
  command: "remove",
  describe: "Remove a note!",
  handler: function () {
    console.log("Removing a note!");
  },
});

//create a list command
yargs.command({
  command: "list",
  describe: "List of notes!",
  handler: function () {
    console.log("Listing of all notes!");
  },
});

//create a read note
yargs.command({
  command: "read",
  describe: "Read a note!",
  handler: function () {
    console.log("Reading a note!");
  },
});

yargs.parse(); //by providing this command, we dont need a to console a yargs.argv as it will parse over the commands and print the output.

// console.log(yargs.argv);
