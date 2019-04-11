const express = require("express");
const app = express();

const PORT = 4000;

function handleHome() {
  res.send("hello from home");
}

function handleProfile() {
  res.send("profile");
}

app.get("/", handleHome);

app.get("/profile", handlePrifile);

function handleListening() {
  console.log(`Listening on http://localhost:${PORT}`);
}

app.listen(4000, handleListening);
