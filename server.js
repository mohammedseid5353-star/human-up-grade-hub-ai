file:///data/user/0/com.foxdebug.acodefree/files/public/server.jsimport express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// AI simple brain (demo logic first)
app.post("/chat", (req, res) => {

    const message = req.body.message.toLowerCase();

    let reply = "I am Human Upgrade Hub AI 🤖";

    if(message.includes("hello")){
        reply = "Hello 👋 How can I help you today?";
    }
    else if(message.includes("who are you")){
        reply = "I am your AI assistant built for Human Upgrade Hub 🚀";
    }
    else if(message.includes("motivate")){
        reply = "🔥 Never stop learning. Your future depends on your discipline!";
    }
    else if(message.includes("trading")){
        reply = "📊 Trading needs patience, risk management and discipline.";
    }

    res.json({ reply });
});

app.listen(3000, () => {
    console.log("🚀 AI Server running on port 3000");
})
