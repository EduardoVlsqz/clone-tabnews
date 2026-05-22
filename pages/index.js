import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/counter")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const handleClick = async () => {
    const res = await fetch("/api/counter", { method: "POST" });
    const data = await res.json();
    setCount(data.count);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>O meu contador funciona :P </h1>
      <button
        style={{
          backgroundColor: "blue",
          color: "black",
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        que inferno 🎉
      </button>
      <p>Funcionadas: {count}</p>
    </div>
  );
}
