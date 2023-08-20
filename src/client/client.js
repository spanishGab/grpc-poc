import { credentials } from "@grpc/grpc-js";
import { notesProto } from "../proto/index.js";

const NoteService = notesProto.NoteService;

const client = new NoteService("localhost:3333", credentials.createInsecure());

export default client;
