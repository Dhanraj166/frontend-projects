import { use } from "react";
import { useState } from "react";

function Inputvalue() {
    const [name, setName] = useState("");
    const [showName, setSecond] = useState("");

    return (
        <>
            <input type="text"
                onChange={(e) => setName(e.target.value)} />
            <button onClick={()=> setSecond(name)}>Greeting</button>
            <h1>Hello, {showName}</h1>
        </>
    )
}

export default Inputvalue;