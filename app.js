const getNotes = require("./notes.js");
const yargs = require("yargs");

//add
yargs.command({
  command: "add",
  describe: "Add a new note!",
  handler: function () {
    console.log("Adding a new note!");
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

console.log(yargs.argv);