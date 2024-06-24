import { useState } from "react"
import ListItem from "./ListItem"

function Todolist() {

    const [isTrue, setisTrue] = useState(true)
    const [items, setItems] = useState<string[]>(["Get some Apples"])
    const [value, setValue] = useState("")
    
    function changeInputValue()
    {
        const input: (HTMLInputElement | null) = document.querySelector('.task-input')
        setValue(input == null ? "" : input.value);
    }

    function addNewTask()
    {
        const input: (HTMLInputElement | null) = document.querySelector('.task-input')
        if(input != null && input.value != "")
        {
            setItems([...items, input.value]);
        }
        setValue("")
        setisTrue(true)
    }

  return (
    <div className="list-container">
        <div className="list">
            {items.map((element) => {
                return <ListItem text={element} items={items} setItems={setItems}></ListItem>
            })}
        </div>
        {isTrue && <button onClick={() => setisTrue(false)}>+ New Task</button>}
        {!isTrue && <input type="text" className="task-input" placeholder="Task" value={value} onChange={changeInputValue}/>}
        {!isTrue && <button onClick={addNewTask}>Add Task</button>}
    </div>
  )
}

export default Todolist