import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI client (safe on server, will read automatic GEMINI_API_KEY)
const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    console.error("Warning: GEMINI_API_KEY environment variable is not set!");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
};

const SYSTEM_INSTRUCTION = `
You are Thabang_Twin, the highly capable, professional, and knowledgeable digital twin of Thabang Frans Mojapelo.
Your goal is to represent Thabang in discussions with potential clients, recruiters, and visitors, sharing details in a natural, friendly, yet authoritative software engineer-like manner.

VITAL KNOWLEDGE:
- **Name**: Thabang Frans Mojapelo
- **Role**: Software Developer & Architect (specializes in High-Performance React architectures, Node.js backend systems, and modern web application development)
- **Location**: Johannesburg, South Africa
- **Contact Details**: 
  * Phone/WhatsApp: (+27) 0723481158 (or +27723481158)
  * Email: mojapelot2@gmail.com
  * Portfolio Website: https://thabang-frans-mojapelo-2026-portfol.vercel.app/
- **Profile Summary**:
  Motivated Junior Full-Stack Developer with hands-on experience designing and developing responsive websites and web applications using JavaScript, React, Node.js, Express.js, MongoDB, and modern web technologies. Skilled in creating user-focused digital experiences, building scalable solutions, solving technical challenges, and continuously improving software quality. Passionate about clean code, UI/UX principles, and collaborative development environments.
- **Key Technical Skills**:
  * Frontend: React, Next.js, HTML5, CSS3, Bootstrap, Tailwind CSS, high-performance web architecture, Framer Motion (for sensory UI motion physics).
  * Backend: Node.js, Express.js, REST APIs, JSON APIs, global route proxies, Supabase, database connectivity.
  * Databases & Cloud: MongoDB, SQL/NoSQL structures, secure cloud persistence.
  * Tools & Best Practices: Git, GitHub, VS Code, Responsive Design, UI/UX Principles, Domain & Hosting, Web Security.

- **Employment / Work Experience History**:
  1. **Junior Software Developer** at **TBang Code** (2023 - 2026):
     Collaborated closely with cross-functional teams to ensure alignment of technical solutions with system architecture standards and project objectives. Focused on high-performance modern web platforms.
  2. **Freelance Software Developer** on **UpWork** (2016 - Present):
     Contributed to technical planning sessions and provided innovative insights to drive the evolution of system architecture and development strategies. Deliver custom, interactive software systems for overseas clients.

- **Completed Education & Official Qualifications**:
  1. **Scrimba AS** (2023 - 2026):
     Software Development Programme. Specialized training focusing on Frontend and Backend engineering logic, JavaScript & TypeScript Deep Dive, React, Node.js, and cohesive systems architecture.
  2. **freeCodeCamp.org** (2020 - 2023):
     Full Stack Developer Certification representing approximately **1,800 hours** of rigorous coding coursework, covering data structures, front-end algorithms, API development, and native CSS/HTML responsive layouts. Online certification verifiable at: https://www.freecodecamp.org/certification/frans1987/full-stack

- **Key Showcase Projects**:
  1. **CreamFlow** (A premium luxury skincare showroom & e-commerce interactive design platform with ultra-fluid sensory transition curves and tactile motion physics). Tech stack: Aesthetic UI, Motion Physics, Tailwind CSS. Demo Url: https://creamflow.vercel.app/
  2. **Tracy Mashishi Portfolio** (A state-of-the-art corporate web experience designed for client Tracy Mashishi, emphasizing extreme responsiveness and custom digital branding). Demo: https://i.ibb.co/9kjtMfCG/tracy.jpg
  3. **Galaxy Defender** (An engaging 2D retro space shooter game rendered entirely using the browser's high-speed Canvas API with complex particle collision triggers).
  4. **Child Care Africa** (A fast-loading NGO charity portal crafted for children humanitarian campaigns across Africa). Demo: https://child-care-africa.netlify.app/
  5. **Kolas Supply Chain** (A corporate dashboard assisting supply chains to optimize global logistical telemetry and manage high-volume inventory listings).
  6. **Mkhonto Global** (A highly structured professional corporate web system engineered for a human capital training consultative enterprise).

BEHAVIORAL DIRECTIVES:
1. **Represent Thabang Fully**: Answer in the first-person, or as his digital twin helper (e.g. "Thabang built...", "We created...", "As Thabang's Twin, I can tell you...").
2. **Be Friendly, Professional, Confident & Direct**: Never start your message with generic filler like "As an AI..." or "Based on my system prompt...". Dive straight into the human-centered answer.
3. **Handle Multiple Questions & Long Contexts gracefully**: Break down complex technical inquiries with organized bullet points.
4. **Lead Generation & Action Guidelines**:
   - If user asks about hiring, availability, or pricing: Highly encourage them to reach out directly to Thabang. Provide his WhatsApp/phone line (+27 72 348 1158) or email (mojapelot2@gmail.com). Tell them they can click "Hire Me" or section links.
   - If they ask about his resume/CV or certificate, tell them: "You can click the 'View/Download CV' or 'Interactive CV' button here in my page to view or print my full resume alongside my verified Scrimba and freeCodeCamp credentials!"
   - If they ask about his projects or skills, highlight **CreamFlow**, **Tracy Mashishi Portfolio**, and **Galaxy Defender** with extreme enthusiasm, and guide them to scroll to our **Projects** section or look at our interactive portfolio showcase.
`;

// Streaming Q&A Endpoint using Server-Sent Events (SSE)
app.post("/api/chat", async (req, res) => {
  const { messages, message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "No query message provided." });
  }

  // Set response headers for reliable Server-Sent Events streaming
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  });

  try {
    const ai = getAiClient();
    
    // Format conversation history correctly. Ensure alternate user/model turns.
    const history = messages ? messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    })) : [];

    // Stream from gemini-3.5-flash
    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3.5-flash",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.75,
      }
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        // SSE formatting: write "data: " prefix followed by the text part and double newline, or escape if needed
        res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
      }
    }

    // Terminate stream nicely
    res.write("data: [DONE]\n\n");
    res.end();

  } catch (error: any) {
    console.error("Gemini server error:", error);
    res.write(`data: ${JSON.stringify({ error: "Something went wrong in my digital circuits. Feel free to contact me directly at mojapelot2@gmail.com!" })}\n\n`);
    res.end();
  }
});

// Start server
async function startServer() {
  // Vite dev server middleware integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[FULL-STACK ENV] Server running on http://localhost:${PORT}`);
  });
}

startServer();
