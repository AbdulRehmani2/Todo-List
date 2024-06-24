import { useState } from "react";

interface ListItem{
    text: string,
    items: string[],
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

function ListItem({ text, items, setItems }: ListItem)
{
    const [isDone, setIsDone] = useState(false)

    function removeItem()
    {
        const newItems = items.filter((element) => {return element != text})
        setItems(newItems)
    }

    return(
        <div className="item-container">
            <input type="checkbox" name="isdone" id="isdone" onChange={() => setIsDone(prev => !prev)}/>
            <span>{text}</span>
            <button className={!isDone ? "hide" : ""} onClick={removeItem}>X</button>
        </div>
    )
}

export default ListItem