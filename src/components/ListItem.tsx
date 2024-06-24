import { useState } from "react";

interface ListItem{
    text: string;
}

function ListItem({ text }: ListItem)
{
    const [isDone, setIsDone] = useState(false)

    return(
        <div className="item-container">
            <input type="checkbox" name="isdone" id="isdone" onChange={() => setIsDone(prev => !prev)}/>
            <span>{text}</span>
            <button className={isDone ? "hide" : ""}>X</button>
        </div>
    )
}

export default ListItem