import { useMemo, useState } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function slowCalculation(num) {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  }

  const result = useMemo(()=>{
    return slowCalculation(count)
  },[count]);

  return (
    <div>
      <p>Result: {result}</p>
      <p>input text : {input}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}
export default UseMemoDemo;