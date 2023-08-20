import { notesRepository } from "../repositories/notes.js";

export default async (_, callback) => {
  try {
    const notes = await notesRepository().getAllNotes();
    console.log("listAllNotes", { notes });
    callback(null, { notes });
  } catch (e) {
    console.error("listAllNotes", { error: e.message });
    callback(new Error("Internal Server Error"), null);
  }
};
