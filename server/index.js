// Importing the express framework
import express from "express";
// Importing dotenv to load environment variables from a .env file
import dotenv from "dotenv";
// Importing mongoose to interact with MongoDB
import mongoose from "mongoose";
// Importing cors to handle Cross-Origin Resource Sharing
import cors from "cors";
// Importing note-related routes
import noteRoutes from "./routes/noteRoutes.js";

// Configuring environment variables
dotenv.config();

// Initializing the express app
const app = express();

// Middlewares
// Enabling CORS for cross-origin requests
app.use(cors());
// Parsing incoming JSON requests
app.use(express.json());

// Routes
// Mounting note routes at the "/api/notes" path
app.use("/api/notes", noteRoutes);

// MongoDB connection
// Connecting to MongoDB using the URI from environment variables
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // If connection is successful
    console.log("MongoDB connected");
    // Starting the server on the specified port
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => 
    // Handling any connection errors
    console.error(err)
  );
