import { useContext } from "react"
import Todolist from "./components/Todolist"
import { DarkModeContext } from "./context/DarkModeProvider"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function App() {

  const {dark, setDark} = useContext(DarkModeContext);

  return (
    <div className="main-container">
        
        <div className={`title-container`}>
          <button className="icon-container" onClick={() => setDark(prev => !prev)}>{dark ? <MdOutlineDarkMode/> : <MdDarkMode/>}</button>
          <span>To-do List</span>
        </div>
		    <Todolist></Todolist>
    </div>
  )
}

export default App
