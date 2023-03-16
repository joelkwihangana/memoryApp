MemoryApp - A MERN Social Media App
MemoryApp is a social media app built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to capture and share their life's memories with others. Users can create, read, update, and delete posts, like and comment on posts, and more.

The app also includes email and Google authentication, pagination, search, filtering, and a fully responsive design.

Features
Create, read, update, and delete posts
Like and comment on posts
Email and Google authentication
Pagination
Search and filtering
Fully responsive design
Technologies Used
MongoDB
Express.js
React.js
Node.js
Bootstrap
Axios
JSON Web Tokens
Passport.js
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/joelkwihangana/memory-app.git
Navigate to the client directory and install the client dependencies:

bash
Copy code
cd memory-app/client
npm install
Navigate to the server directory and install the server dependencies:

bash
Copy code
cd ../server
npm install
Create a .env file in the server directory and set the following environment variables:

makefile
Copy code
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Start the server:

sql
Copy code
npm run start
In a separate terminal, navigate to the client directory and start the client:

bash
Copy code
cd ../client
npm start
Open your browser and navigate to http://localhost:3000 to use the app.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
