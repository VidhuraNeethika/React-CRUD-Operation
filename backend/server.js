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

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "react_crud",
});

app.get("/", (req, res) => {
  const queery = "SELECT * FROM user";
  connection.query(queery, (err, result) => {
    if (err) return res.json({ Message: err });
    return res.json(result);
  });
});

app.post("/userRegistration", (req, res) => {
  const query = "INSERT INTO user (name, email,password) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  connection.query(query, [values], (err, result) => {
    if (err) return res.json({ Message: err });
    return res.json(result);
  });
});

app.get("/read/:id", (req, res) => {
  const query = "SELECT * FROM user WHERE id = ?";
  const id = [req.params.id];
  connection.query(query, [id], (err, result) => {
    if (err) return res.json({ Message: err });
    return res.json(result);
  });
});

app.put("/update/:id", (req, res) => {
  const query =
    "UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?";
  connection.query(
    query,
    [req.body.name, req.body.email, req.body.password, req.params.id],
    (err, result) => {
      if (err) return res.json({ Message: err });
      return res.json(result);
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const query = "DELETE FROM user WHERE id = ?";
  connection.query(query, [req.params.id], (err, result) => {
    if (err) return res.json({ Message: err });
    return res.json(result);
  });
});
