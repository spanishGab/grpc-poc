import { Server, ServerCredentials } from "@grpc/grpc-js";
import { notesProto } from "../proto/index.js";
import listAllNotes from "./services/list-all-notes.js";
import addNote from "./services/add-note.js";
import editNote from "./services/edit-note.js";
import deleteNote from "./services/delete-note.js";
import getNote from "./services/get-note.js";

const server = new Server();

server.addService(notesProto.NoteService.service, {
  listAllNotes,
  getNote,
  addNote,
  editNote,
  deleteNote,
});

server.bindAsync(
  "127.0.0.1:3333",
  ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at port 3333");
    server.start();
  }
);
