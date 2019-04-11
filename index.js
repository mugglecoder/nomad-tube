import express from "express";
const app = express();

const PORT = 4000;

const handleHome = (req, res) => {
  res.send("hello from home");
};

const handleProfile = (req, res) => {
  res.send("profile");
};

const handleListening = () => {
  console.log(`Listening on http://localhost:${PORT}`);
};

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);
