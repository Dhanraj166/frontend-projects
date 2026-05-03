import { useState } from "react"

function Character(){
    const [letter,setLetter] = useState("")
    return(
        <>
            <textarea name="" id="" placeholder="Enter text here ...." onChange={(e)=>setLetter(e.target.value)}></textarea>
            <h3>Characters : {letter.length}</h3>
        </>
    )
}
export default Character