import { notesRepository } from "../repositories/notes.js";
import treatErrorResponse from "./utils/treat-error-response.js";

export default async (call, callback) => {
  console.log("deleteNote", { requestData: call.request });
  const { id } = call.request;
  const repository = notesRepository();
  try {
    await repository.deleteNote(id);
    callback(null, {});
  } catch (e) {
    console.error("deleteNote", { error: e.message });
    treatErrorResponse(e, callback);
  }
};
