import { useState } from "react";

function Counter({ name, age, phone, mail }) {
  const [count, setCount] = useState(0)

  return (

    <div >
      <div className="container">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="btn">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
      <div className="user">
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>mail-ID : {mail}</h3>
        <h4>Ph-no : {phone}</h4>
      </div>
    </div>

  )
}

export default Counter;