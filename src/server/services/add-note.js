import { notesRepository } from "../repositories/notes.js";
import treatErrorResponse from "./utils/treat-error-response.js";

export default async (call, callback) => {
  console.log("addNote", { requestData: call.request });
  const repository = notesRepository();
  const newNote = {
    id: Date.now().toString(),
    ...call.request,
  };
  try {
    const note = await repository.insertNote(newNote);
    console.log("addNote", { responseData: note });
    callback(null, note);
  } catch (e) {
    console.error("addNote", { error: e.message });
    treatErrorResponse(e, callback);
  }
};
