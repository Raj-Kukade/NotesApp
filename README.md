_Notes Application (MERN Stack)_
A simple and elegant Notes App built using the MERN stack (MongoDB, Express, React, Node.js) and styled with TailwindCSS. Create, read, and delete notes with ease!

![notes](https://github.com/user-attachments/assets/345d62cb-f39f-413f-8c6d-05285f8677af)

🚀 Features
Add Notes: Create new notes with a title and content.
View Notes: View all your saved notes in an organized manner.
Delete Notes: Delete any note you no longer need.
Responsive UI: Fully responsive UI designed using TailwindCSS for an optimal experience on all devices.

Easy Setup: Set up both client and server with just a few commands.

🛠 Tech Stack
Frontend: React (Vite),TailwindCSS
Axios (For API requests)
Backend: Node.js, Express.js
MongoDB (with Mongoose)
CORS (Cross-Origin Resource Sharing)

🖥️ Installation
1. Clone the repository:
bash
Copy
Edit
git clone https://github.com/yourusername/notes-app.git
cd notes-app

3. Install Server Dependencies:
Navigate to the server directory and install the dependencies.
bash
Copy
Edit
cd server
npm install

4. Set up your MongoDB connection:
Create a .env file in the server directory with the following content:
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
Replace your_mongodb_connection_string with your own MongoDB URI (can use MongoDB Atlas or local MongoDB).

5. Run the Server:
bash
Copy
Edit
npm start
This will start the server at http://localhost:5000.

6. Install Client Dependencies:
Navigate to the client directory and install the dependencies.

bash
Copy
Edit
cd ../client
npm install

7. Run the Client:
bash
Copy
Edit
npm run dev
The client will be available at http://localhost:5173.

🧑‍💻 Usage
Open your browser and navigate to http://localhost:5173.
Add a note by typing a title and content and clicking "Add Note".
Your notes will be displayed in a clean and responsive grid.
Click the "Delete" button on any note to remove it.

