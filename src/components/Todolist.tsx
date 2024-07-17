import { useContext, useEffect, useState } from "react"
import ListItem from "./ListItem"
import { DarkModeContext } from "../context/DarkModeProvider"

type data = {
    id: number,
    task: string
}

function Todolist() {

    const [isTrue, setisTrue] = useState(true)
    const [items, setItems] = useState<string[]>([])
    const [value, setValue] = useState("")

    

    useEffect(() => {
        function parseData(data: data[])
        {
            const parsedData = data.map(element => element.task)
            setItems([...parsedData])
        }

        fetch("http://localhost:8000/list?_sort=id")
        .then(res => res.json())
            .then(result => parseData(result))
            .catch(err => console.error(err))
        .catch(err => console.error(err))
    }, [])

    function changeInputValue()
    {
        const input: (HTMLInputElement | null) = document.querySelector('.task-input')
        setValue(input == null ? "" : input.value);
    }

    function addData(task: string)
    {
        fetch("http://localhost:8000/list", {
            method: "POST",
            headers: {
                "Content-Type" : "applicaion/json"
            },
            body: JSON.stringify({task: task})
        })
        .then(res => res.json())
            .then(result => setItems([result.task, ...items]))
    }

    function addNewTask()
    {
        const input = document.querySelector<HTMLInputElement>('.task-input')
        if(input != null && input.value != "")
        {
            addData(input.value)
        }
        setValue("")
        setisTrue(true)
    }

    const {dark} = useContext(DarkModeContext)

  return (
    <div className={`list-container ${dark ? "dark" : ""}`}>
        <div className="list">
            {items.map((element) => {
                return <ListItem key={element} text={element} items={items} setItems={setItems}></ListItem>
            })}
        </div>
        {isTrue && <button onClick={() => setisTrue(false)}>+ New Task</button>}
        {!isTrue && <input type="text" className="task-input" placeholder="Task" value={value} onChange={changeInputValue}/>}
        {!isTrue && <button onClick={addNewTask}>Add Task</button>}
    </div>
  )
}

export default Todolist