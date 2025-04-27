// Importing useState and useEffect hooks from React
import { useState, useEffect } from "react";
// Importing axios for making HTTP requests
import axios from "axios";

// Getting API URL from environment variables
const API = import.meta.env.VITE_API_URL;

function App() {
  // Defining states for notes, form fields, loading, and error
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch all notes from backend
  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`${API}/notes`);
      setNotes(res.data);
    } catch (err) {
      setError("Failed to fetch notes. Please try again later.");
      console.error("Error fetching notes:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch notes on component mount
  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to handle form submission for adding a new note
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Title and content are required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await axios.post(`${API}/notes`, { 
        title: title.trim(), 
        content: content.trim() 
      });
      // Reset form after successful submission
      setTitle("");
      setContent("");
      // Refresh notes list
      await fetchNotes();
    } catch (err) {
      setError("Failed to add note. Please try again later.");
      console.error("Error adding note:", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a note
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await axios.delete(`${API}/notes/${id}`);
      // Refresh notes list after deletion
      await fetchNotes();
    } catch (err) {
      setError("Failed to delete note. Please try again later.");
      console.error("Error deleting note:", err);
    } finally {
      setLoading(false);
    }
  };

  // UI
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* App Heading */}
      <h1 className="text-3xl font-bold mb-4">Notes App</h1>

      {/* Error Message */}
      {error && (
        <div className="w-full max-w-md mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Form to add a new note */}
      <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        />
        <button 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Notes"}
        </button>
      </form>

      {/* Display notes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {loading && notes.length === 0 ? (
          <div className="col-span-full text-center">Loading notes...</div>
        ) : (
          notes.map((note) => (
            <div key={note._id} className="bg-white p-4 rounded shadow">
              {/* Note title */}
              <h2 className="font-bold text-xl">{note.title}</h2>
              {/* Note content */}
              <p className="mt-2">{note.content}</p>
              {/* Delete button */}
              <button
                onClick={() => handleDelete(note._id)}
                className="mt-4 bg-red-500 text-white p-1 rounded hover:bg-red-600 disabled:bg-red-300"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Exporting the App component
export default App;
