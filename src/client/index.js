import client from "./client.js";
import addNote from "./services/add-note.js";
import deleteNote from "./services/delete-note.js";
import editNote from "./services/edit-note.js";
import getNote from "./services/getNote.js";
import listAllNotes from "./services/list-all-notes.js";

function startNotesAPI() {
  switch (process.argv[2]) {
    case "listAllNotes":
      client.listAllNotes({}, listAllNotes);
      break;

    case "addNote":
      client.addNote(
        {
          title: process.argv[3],
          content: process.argv[4],
        },
        addNote
      );
      break;

    case "editNote":
      client.editNote(
        {
          id: process.argv[3],
          title: process.argv[4],
          content: process.argv[5],
        },
        editNote
      );
      break;

    case "deleteNote":
      client.deleteNote(
        {
          id: process.argv[3],
        },
        deleteNote
      );
      break;

    case "getNote":
      client.getNote(
        {
          id: process.argv[3],
        },
        getNote
      );
      break;

    default:
      console.log("Invalid operation!");
      break;
  }
}

startNotesAPI();
