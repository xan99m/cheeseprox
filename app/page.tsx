import { useState } from 'react';

export default function HomePage() {
  const [joke, setJoke] = useState('');
  const [bgColor, setBgColor] = useState('#fff8e1');
  const [emojiStyle, setEmojiStyle] = useState<React.CSSProperties>({ transform: 'translateY(0px) scale(1)' });

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
      transition: 'transform 0.5s ease'
    });

    // Reset emoji after animation
    setTimeout(() => {
      setEmojiStyle({ transform: 'translateY(0px) scale(1)', transition: 'transform 0.5s ease' });
    }, 500);
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: bgColor, minHeight: '100vh', padding: '50px', transition: 'background-color 0.5s' }}>
      <h1 style={{ color: '#ff6f61', fontSize: '2.5rem' }}>Cheese Joke Generator 🧀</h1>
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
          marginTop: '20px'
        }}
      >
        Get a Cheese Joke!
      </button>
      <div style={{ marginTop: '30px', fontSize: '1.5rem', minHeight: '80px' }}>{joke}</div>
      <span style={{ fontSize: '3rem', marginTop: '20px', display: 'inline-block', ...emojiStyle }}>🧀</span>
    </div>
  );
}
