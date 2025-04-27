// Importing mongoose to define the schema
import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({       // Defining the Note schema
  
  title: { type: String, required: true},     // Title field (required string)
  content: { type: String, required: true},  // Content field (required string)
}, 
{ 
  // Automatically add createdAt and updatedAt timestamps
  timestamps: true 
});

// Exporting the Note model based on the noteSchema
export default mongoose.model("Note", noteSchema);
