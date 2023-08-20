import client from "./client.js";
import addNote from "./services/add-note.js";
import editNote from "./services/edit-note.js";
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
      client.addNote(
        {
          id: process.argv[3],
          title: process.argv[4].split('=')[0] === 'title' ? process.argv[4] : undefined,
          content: process.argv[5].split('=')[0] === 'content' ? process.argv[5] : undefined,
        },
        editNote
      );
      break;

    default:
      console.log("Invalid operation!");
      break;
  }
}

startNotesAPI();
