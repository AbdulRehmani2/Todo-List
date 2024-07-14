import { useEffect, useState } from "react"
import ListItem from "./ListItem"

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

        fetch("http://localhost:8000/list")
        .then(res => res.json())
            .then(result => parseData(result))
            .catch(err => console.error(err))
        .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items))
    }, [items])
    
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
            !items.some(element => element == input.value) && setItems([...items, input.value])
        }
        setValue("")
        setisTrue(true)
    }

  return (
    <div className="list-container">
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