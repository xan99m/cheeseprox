"use client";

import { useState } from "react";

export default function Home() {
  const [proxyHtml, setProxyHtml] = useState("");
  const [url, setUrl] = useState("");

  async function loadSite() {
    if (!url) {
      setProxyHtml("<h2>Please enter a URL</h2>");
      return;
    }

    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
      const html = await response.text();
      setProxyHtml(html);
    } catch (e) {
      setProxyHtml("<h2>Error loading site.</h2>");
    }
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      {/* YOUR CHEESE JOKE UI stays here */}

      <h2 style={{ marginTop: "60px" }}>🔐 Built-In Proxy Viewer</h2>

      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL (https://example.com)"
        style={{
          padding: "10px",
          width: "320px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginRight: "10px"
        }}
      />

      <button
        onClick={loadSite}
        style={{
          padding: "10px 20px",
          background: "#ffcc00",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Load
      </button>

      <iframe
        style={{
          marginTop: "30px",
          width: "100%",
          height: "600px",
          border: "2px solid #444",
          borderRadius: "10px",
          background: "white"
        }}
        srcDoc={proxyHtml}
      />
    </div>
  );
}
