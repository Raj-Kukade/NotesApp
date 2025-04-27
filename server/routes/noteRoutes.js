// Importing express to create routes
import express from "express";
// Importing controller functions for notes
import { createNote, getNotes, deleteNote } from "../controllers/noteController.js";

// Creating a router instance
const router = express.Router();

// Route to create a new note
router.post("/", createNote);

// Route to get all notes
router.get("/", getNotes);

// Route to delete a specific note by ID
router.delete("/:id", deleteNote);

// Exporting the router
export default router;
