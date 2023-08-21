import { notesRepository } from "../repositories/notes.js";
import treatErrorResponse from "./utils/treat-error-response.js";

export default async (call, callback) => {
  console.log("editNote", { requestData: call.request });
  const { id, title, content } = call.request;
  const repository = notesRepository();
  try {
    const note = await repository.updateNote(id, { title, content });
    console.log("editNote", { repsonseData: note });
    callback(null, note);
  } catch (e) {
    console.error("editNote", { error: e.message });
    treatErrorResponse(e, callback);
  }
};
