import { Server, ServerCredentials } from "@grpc/grpc-js";
import notesDataBase from "../data/notes.json" assert { type: "json" };
import { notesProto } from "./proto/index.js";

const server = new Server();

server.addService(notesProto.NoteService.service, {
  list: (_, callback) => {
    console.log("Returning all notes")
    callback(null, notesDataBase);
  },
});

server.bindAsync(
  "127.0.0.1:3333",
  ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at port 3333");
    server.start();
  }
);
