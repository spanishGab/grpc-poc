import { credentials } from "@grpc/grpc-js";
import { notesProto } from "./proto/index.js";

const NoteService = notesProto.NoteService;

const client = new NoteService(
  "localhost:3333",
  credentials.createInsecure()
);

client.list({}, (error, notes) => {
  if (!error) {
    console.log(notes);
  } else {
    console.error("Error while trying to list notes", error);
  }
});

export default client;
