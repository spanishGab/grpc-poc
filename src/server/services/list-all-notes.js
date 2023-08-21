import { notesRepository } from "../repositories/notes.js";
import treatErrorResponse from "./utils/treat-error-response.js";

export default async (_, callback) => {
  try {
    const notes = await notesRepository().getAllNotes();
    console.log("listAllNotes", { responseData: notes });
    callback(null, { notes });
  } catch (e) {
    console.error("listAllNotes", { error: e.message });
    treatErrorResponse(e, callback);
  }
};
