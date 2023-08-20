import { notesRepository } from "../repositories/notes.js";

export default async (call, callback) => {
  console.log("addNote", { requestData: call.request });
  const repository = notesRepository();
  const newNote = {
    id: Date.now().toString(),
    ...call.request,
  };
  try {
    const note = await repository.insertNote(newNote);
    callback(null, note);
  } catch (e) {
    console.error("addNote", { error: e.message });
    callback(new Error("Internal server error"), null);
  }
};
