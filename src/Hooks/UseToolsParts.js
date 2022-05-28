import { useEffect, useState } from "react";

const UseToolsParts = (toolsId) => {
    const [tools, setTools] = useState({});
    useEffect(() => {
        fetch(` https://aqueous-forest-62653.herokuapp.com/toolsParts/${toolsId}`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [toolsId])
    return [tools, setTools]
};

export default UseToolsParts;