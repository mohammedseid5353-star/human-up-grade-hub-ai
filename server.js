import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const message = (req.body.message || "").toLowerCase();

  let reply = "I am Human Upgrade Hub AI 🤖";

  if (message.includes("hello")) {
    reply = "Hello 👋 How can I help you today?";
  } else if (message.includes("who are you")) {
    reply = "I am your AI assistant built for Human Upgrade Hub 🚀";
  } else if (message.includes("motivate")) {
    reply = "🔥 Never stop learning. Your future depends on your discipline!";
  } else if (message.includes("trading")) {
    reply = "📊 Trading needs patience, risk management and discipline.";
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 AI Server running on port ${PORT}`);
});
