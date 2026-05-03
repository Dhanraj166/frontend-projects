import { useEffect, useState } from "react";

function UseEffectDemo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    // useEffect(() => {
    //     if(count % 2 == 0){
    //         console.log("number is Even");

    //     }
    //     // console.log("Compount Mounted");
    //     // console.log("Count",count);
    //     // console.log("Name",name);  
    // }, [count])
    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         const data = await res.json()
    //         setUser(data);
    //     }
    //     getData();
    // }, [])
    // function setUser(data) {
    //     console.log(data);
    // }
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Cleanup
        return () => {
            clearInterval(timer);
            console.log("Timer cleaned up");
        };
    }, []);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <h1>count :{count}</h1>
            <input type="text" onChange={(e => setName(e.target.value))} />
            <p>{name}</p>

        </>
    )
}

export default UseEffectDemo;