import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

// frontend
app.use(express.static(".")); 

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

// chat API
app.post("/chat", (req, res) => {
  const message = (req.body.message || "").toLowerCase();

  let reply = "🤖 I am Human Upgrade Hub AI";

  if (message.includes("hello")) {
    reply = "👋 Hello! How can I help you?";
  } else if (message.includes("who are you")) {
    reply = "🚀 I am your AI assistant";
  } else if (message.includes("motivate")) {
    reply = "🔥 Never give up!";
  } else if (message.includes("trading")) {
    reply = "📊 Trading needs discipline + patience";
  } else {
    reply = "🤖 I am still learning...";
  }

  res.json({ reply });
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
