import { useState } from "react";
function Skills() {
    const [skills, setSkills] = useState([]);

    const handleChange = (skill) => {
        if (skills.includes(skill)) {
            setSkills(skills.filter(s => s !== skill));
        } else {
            setSkills([...skills, skill]);
        }
    };

    return (
        <>
            <input type="checkbox" onChange={() => handleChange("React")} /> React
            <input type="checkbox" onChange={() => handleChange("Node")} /> Node
            <input type="checkbox" onChange={() => handleChange("Java")} /> Java
            <input type="checkbox" onChange={() => handleChange("SQL")} /> SQL
            {console.log(skills)}
        </>
    
    );
    
}

export default Skills
