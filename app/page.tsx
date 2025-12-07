"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [joke, setJoke] = useState('');
  const [bgColor, setBgColor] = useState('#fff8e1');
  const [emojiStyle, setEmojiStyle] = useState<React.CSSProperties>({
    transform: 'translateY(0px) scale(1)',
  });

  const [proxyOpen, setProxyOpen] = useState(false);

  const bgColors = [
    "#fff8e1", "#ffe0b2", "#ffd54f", "#ffcc80", "#ffab91",
    "#ffe57f", "#f8bbd0", "#e1bee7", "#b3e5fc", "#c8e6c9"
  ];

  const fetchJoke = async () => {
    const res = await fetch('/api/joke');
    const data = await res.json();
    setJoke(data.joke);

    const color = bgColors[Math.floor(Math.random() * bgColors.length)];
    setBgColor(color);

    const x = (Math.random() - 0.5) * 50;
    const y = -Math.random() * 50;
    const scale = 1 + Math.random();
    const rotate = Math.random() * 360;

    setEmojiStyle({
      transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`,
      transition: "transform 0.5s ease",
    });

    setTimeout(() => {
      setEmojiStyle({
        transform: 'translateY(0px) scale(1)',
        transition: "transform 0.5s ease",
      });
    }, 500);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: bgColor,
        minHeight: '100vh',
        padding: '50px',
        transition: 'background-color 0.5s',
      }}
    >
      <h1 style={{ color: '#ff6f61', fontSize: '2.5rem' }}>
        Cheese Joke Generator 🧀
      </h1>

      <button
        onClick={fetchJoke}
        style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      >
        Get a Cheese Joke!
      </button>

      <div style={{ marginTop: '30px', fontSize: '1.5rem', minHeight: '80px' }}>
        {joke}
      </div>

      <span
        style={{
          fontSize: '3rem',
          marginTop: '20px',
          display: 'inline-block',
          ...emojiStyle,
        }}
      >
        🧀
      </span>

      {/* Bottom-left proxy button */}
      <button
        onClick={() => setProxyOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          background: "#222",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Open Proxy Panel
      </button>

      {/* Proxy slide-up panel */}
      {proxyOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "50vh",
            background: "#111",
            color: "white",
            padding: "20px",
            boxShadow: "0 -5px 10px rgba(0,0,0,0.5)",
            overflowY: "auto",
          }}
        >
          <button
            onClick={() => setProxyOpen(false)}
            style={{
              float: "right",
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>

          <h2>Educational Proxy Panel</h2>
          <p>This demonstrates how a proxy fetches raw HTML from a URL.</p>

          <Link href="/proxy">
            <button
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: "blue",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Open Proxy Learning Page
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
