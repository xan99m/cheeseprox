import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("public")); // serves your cheese website

app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).send("Missing ?url=");
  }

  try {
    const response = await fetch(targetUrl);
    const html = await response.text();

    res.set("Content-Type", "text/html");
    res.send(html);
  } catch (err) {
    res.status(500).send("Error fetching site: " + err.message);
  }
});

app.listen(3001, () => console.log("Cheese server + proxy running at http://localhost:3001"));
