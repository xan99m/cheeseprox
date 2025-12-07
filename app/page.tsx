"use client";
import { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState("");

  async function getJoke() {
    try {
      const res = await fetch("/api/joke", { cache: "no-store" });
      const data = await res.json();
      setJoke(data.joke);
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
