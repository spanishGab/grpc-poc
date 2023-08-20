import { notesRepository } from "../repositories/notes.js";

export default async (call, callback) => {
  console.log("editNote", { requestData: call.request });
  const { id, title, content } = request;
  const repository = notesRepository();
  try {
    const note = await repository.updateNote(id, { title, content });
    callback(null, note);
  } catch (e) {
    console.error("editNote", { error: e.message });
    callback(new Error("Internal server error"), null);
  }
};
