import path from "path";
import { fileURLToPath } from "url";
import { writeFile, readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const NOTES_DATABASE = {
  FILE_PATH: path.join(__dirname, "..", "..", "..", "data", "notes.json"),
  OPTIONS: { encoding: "utf8" },
};

export function notesRepository() {
  const getAllNotes = async () => {
    return JSON.parse(
      (
        await readFile(NOTES_DATABASE.FILE_PATH, NOTES_DATABASE.OPTIONS)
      ).toString()
    );
  };

  const getNoteById = async (id) => {
    const notes = await getAllNotes();
    const note = notes.find((note) => note.id === id);
    if (note === undefined) {
      throw new Error("DBError: Note not found");
    }

    return note;
  };

  const insertNote = async (note) => {
    const notes = await getAllNotes();
    notes.push(note);
    await writeFile(
      NOTES_DATABASE.FILE_PATH,
      JSON.stringify(notes, null, 2),
      NOTES_DATABASE.OPTIONS
    );
    return note;
  };

  const updateNote = async (id, attributes) => {
    const notes = await getAllNotes();
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex === -1) {
      throw new Error("DBError: Note not found");
    }

    notes[noteIndex] = {
      id: notes[noteIndex].id,
      title: attributes.title ?? notes[noteIndex].title,
      content: attributes.content ?? notes[noteIndex].content,
    };
    await writeFile(
      NOTES_DATABASE.FILE_PATH,
      JSON.stringify(notes, null, 2),
      NOTES_DATABASE.OPTIONS
    );
    return notes[noteIndex];
  };

  const deleteNote = async (id) => {
    const notes = await getAllNotes();
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex === -1) {
      throw new Error("DBError: Note not found");
    }
    notes.splice(noteIndex, 1);
    await writeFile(
      NOTES_DATABASE.FILE_PATH,
      JSON.stringify(notes, null, 2),
      NOTES_DATABASE.OPTIONS
    );
  }

  return {
    getAllNotes,
    getNoteById,
    insertNote,
    updateNote,
    deleteNote,
  };
}
