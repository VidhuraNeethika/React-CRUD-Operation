# React CRUD Application Using Express.js and MySQL

This is a CRUD (Create, Read, Update, Delete) application built using React, Express.js, MySQL 2, Axios, and CORS.

## Introduction
This project aims to demonstrate how to build a CRUD application using React as the frontend framework, Express.js as the backend framework, MySQL 2 as the database, and Axios for making HTTP requests. The application allows users to perform basic CRUD operations on a dataset.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Express.js: A fast and minimalist web application framework for Node.js.
- MySQL 2: A MySQL client for Node.js that supports promises.
- Axios: A promise-based HTTP client for making API requests.
- CORS: A mechanism that allows restricted resources on a web page to be requested from another domain.
- Nodemon: A utility that monitors for any changes in the source code and automatically restarts the server.

## Installation
- Create a new directory.
- Make sure you have Node.js installed.

### Frontend Setup
#### Run to initialize a new React project.
```sh
 npm create vite@latest frontend
```

#### Run to navigate to the project directory.
```sh
cd frontend
```

#### Run to install the required dependencies.
```sh
npm install axios react-router-dom
```

#### Run to start the development server.
```sh
npm start
```

### Backend Setup
#### Then create a new directory inside the project directory and name it
```sh
backend
```

#### Run to initialize a new Node.js project.
```sh
npm init -y
```

#### Run to install the required dependencies.
```sh
npm install express mysql2 cors nodemon
```
#### Then create a new file inside the `backend` directory and name it `server.js`.
#### Then put the following code inside the `server.js` file:

```javascript
import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const port = 3000;
app.use(cors()); // for allowing cross-origin requests from frontend to backend server.It is a middleware function.
app.use(express.json()); // for parsing application/json

app.listen(port, () => {
  console.log(`Server listening on port : ${port}`);
});
```
- After that put the following code inside the `package.json` file:

```json
"type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
```
- Run `npm start` to start the server.

### Database Setup
- Make sure you have MySQL installed.
- Create a new database and a table inside the database.
- Put the following code inside the `server.js` file to connect to the database:

```javascript
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "your_database",
});
```

### Sample endpoint for fetching data from the database
- Put the following code inside the `server.js` file to fetch data from the database:

```javascript
app.get("/", (req, res) => {
  const queery = "SELECT * FROM user";
  connection.query(queery, (err, result) => {
    if (err) return res.json({ Message: err });
    return res.json(result);
  });
});
```

## Conclusion
This project demonstrates how to build a CRUD application using React, Express.js, MySQL 2, Axios, and CORS. The application allows users to perform basic CRUD operations on a dataset.
