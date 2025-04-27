// Importing the Note model
import Note from "../models/Note.js";

// Create Note
export const createNote = async (req, res) => {
  // Extract title and content from request body
  const { title, content } = req.body;
  try {
    // Create a new note in the database
    const note = await Note.create({ title, content });
    // Send back the created note with status 201 (Created)
    res.status(201).json(note);
  } catch (error) {
    // Handle any errors and send a 400 (Bad Request) response
    res.status(400).json({ error: error.message });
  }
};

// Get All Notes
export const getNotes = async (req, res) => {
  try {
    // Find all notes in the database
    const notes = await Note.find();
    // Send back the list of notes with status 200 (OK)
    res.status(200).json(notes);
  } catch (error) {
    // Handle any errors and send a 500 (Server Error) response
    res.status(500).json({ error: error.message });
  }
};

// Delete Note
export const deleteNote = async (req, res) => {
  try {
    // Find the note by ID from request params and delete it
    const note = await Note.findByIdAndDelete(req.params.id);
    // Send back a success message with status 200 (OK)
    res.status(200).json({ message: "Note deleted", note });
  } catch (error) {
    // Handle any errors and send a 500 (Server Error) response
    res.status(500).json({ error: error.message });
  }
};
