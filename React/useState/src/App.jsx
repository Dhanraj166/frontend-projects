import { useState } from 'react';


function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(function(on) {
  return !on;
});
  };

  return (
    <>
      <h1>{toggle ? "ON" : "OFF"}</h1>

      <button onClick={handleToggle }>
        ON / OFF
      </button>
    </>
  );
}

export default App
