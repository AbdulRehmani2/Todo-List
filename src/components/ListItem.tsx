import { useContext, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { DarkModeContext } from "../context/DarkModeProvider";

interface ListItem{
    text: string,
    items: string[],
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

function ListItem({ text, items, setItems }: ListItem)
{
    const [isDone, setIsDone] = useState(false)
    const theme = useContext(DarkModeContext)

    async function removeItem()
    {
        const res = await fetch(`http://localhost:8000/list?task=${text}`)
        const task = await res.json()
        fetch(`http://localhost:8000/list/${task[0].id}`, {
            method: "DELETE",
        }).then(() => setItems(items.filter(element => element != task[0].task)))
    }

    return(
        <div className="item-container">
            <input type="checkbox" name="isdone" id="isdone" onChange={() => setIsDone(prev => !prev)}/>
            <span>{text}</span>
            <button className={`icon-button ${theme?.dark ? "dark" : ""} ${!isDone ? "hide" : ""}`} onClick={removeItem}><IoIosCloseCircleOutline/></button>
        </div>
    )
}

export default ListItem