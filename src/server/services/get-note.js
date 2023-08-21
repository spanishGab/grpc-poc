import { notesRepository } from "../repositories/notes.js";
import treatErrorResponse from "./utils/treat-error-response.js";

export default async (call, callback) => {
  console.log("getNote", { requestData: call.request });
  const repository = notesRepository();
  const { id } = call.request;
  try {
    const note = await repository.getNoteById(id);
    console.log("getNote", { responseData: note });
    callback(null, note);
  } catch (e) {
    console.error("getNote", { error: e.message });
    treatErrorResponse(e, callback);
  }
};
