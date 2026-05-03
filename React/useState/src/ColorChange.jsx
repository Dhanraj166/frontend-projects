import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, padding: "40px", textAlign: "center" }}>
      <p>Current color: {color}</p>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("steelblue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("white")}>Reset</button>
    </div>
  );
}
export default ColorChanger