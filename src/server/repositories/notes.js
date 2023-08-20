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
    try {
      return JSON.parse(
        (
          await readFile(NOTES_DATABASE.FILE_PATH, NOTES_DATABASE.OPTIONS)
        ).toString()
      );
    } catch (e) {
      throw new Error("DBError: read all error");
    }
  };

  const getNoteById = async (id) => {
    try {
      const notes = await getAllNotes();
      const note = notes.find((note) => note.id === id);
      if (note === undefined) {
        throw new Error("DBError: note not found");
      }

      return note;
    } catch (e) {
      throw new Error("DBError: read by id error");
    }
  };

  const insertNote = async (note) => {
    try {
      const notes = await getAllNotes();
      notes.push(note);
      await writeFile(
        NOTES_DATABASE.FILE_PATH,
        JSON.stringify(notes, null, 2),
        NOTES_DATABASE.OPTIONS
      );
      return note;
    } catch (e) {
      throw new Error("DBError: write error");
    }
  };

  const updateNote = async (noteId, attributes) => {
    const foundNote = false;
    try {
      const notes = await getAllNotes();
      notes.forEach((note, index, notes) => {
        if (note.id === noteId) {
          foundNote = true;
          notes[index] = {
            id: note.id,
            title: attributes.title ?? note.title,
            content: attributes.content ?? note.content,
          };
        }
      });
      await writeFile(
        NOTES_DATABASE.FILE_PATH,
        JSON.stringify(notes, null, 2),
        NOTES_DATABASE.OPTIONS
      );

      if (!foundNote) {
        throw new Error("DBError: note not found");
      }
    } catch (e) {
      throw new Error("DBError: update error");
    }
  };

  return {
    getAllNotes,
    getNoteById,
    insertNote,
    updateNote,
  };
}
