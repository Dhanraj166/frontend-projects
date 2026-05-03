import { useState } from "react";

function Show() {
    const [showText, setShowText] = useState(false);

    return (
        <>
            <button onClick={() => setShowText(!showText)}>
                {showText ? "Hide" : "Show"}
            </button>

            <h2>
                {showText
                    ? "A sentence consists of one independent clause a subject and a predicate that expresses a complete thought."
                    : ""}
            </h2>
        </>
    );
}

export default Show;