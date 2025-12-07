"use client";
import { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState("");
  const [bgColor, setBgColor] = useState("#fff8e1"); // initial background

  const colors = [
    "#fff8e1", "#ffe0b2", "#ffd54f", "#ffcc80", "#ffab91",
    "#ffe57f", "#f8bbd0", "#e1bee7", "#b3e5fc", "#c8e6c9"
  ];

  async function getJoke() {
    try {
      const res = await fetch("/api/joke", { cache: "no-store" });
      const data = await res.json();
      setJoke(data.joke);

      // Pick a random background color
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(newColor);

    } catch {
      setJoke("Error getting joke 😢");
    }
  }

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        fontFamily: "sans-serif",
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease"
      }}
    >
      <button
        onClick={getJoke}
        style={{
          padding: "15px 30px",
          background: "red",
          color: "white",
          borderRadius: "10px",
          fontSize: "20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get Cheese Joke
      </button>

      <div style={{ fontSize: "24px", maxWidth: "500px", textAlign: "center" }}>
        {joke}
      </div>
    </main>
  );
}
