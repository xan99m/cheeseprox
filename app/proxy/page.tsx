"use client";

import { useState } from "react";

export default function ProxyPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const fetchProxy = async () => {
    setResult("Loading...");

    try {
      const res = await fetch("/api/proxy?url=" + encodeURIComponent(url));
      const text = await res.text();
      setResult(text);
    } catch (err) {
      setResult("Error fetching data.");
    }
  };

  return (
    <div style={{ padding: "40px", background: "#111", color: "white", minHeight: "100vh" }}>
      <h1>Proxy Learning Tool</h1>
      <p>This shows how a server fetches raw HTML from a remote site.</p>

      <input
        type="text"
        placeholder="Enter a URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "5px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={fetchProxy}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Fetch HTML
      </button>

      <pre style={{
        background: "#222",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
        whiteSpace: "pre-wrap",
        overflowX: "auto"
      }}>
        {result}
      </pre>
    </div>
  );
}
