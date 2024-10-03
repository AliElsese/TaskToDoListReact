import { useRef, useState } from 'react'
import './App.css'

function App() {

  const taskInput = useRef();
  const [tasks, setTasks] = useState([]);

  function addTask() {
    let userTasks = [...tasks]
    userTasks.push(taskInput.current.value)
    setTasks(userTasks)
  }

  function deleteTask(index) {
    let userTasks = [...tasks]
    userTasks.splice(index,1);
    setTasks(userTasks)
  }

  return (
    <>
      <div className='col-12 App'>
        <input ref={taskInput}/>
        <button onClick={() => addTask()}>Add Task</button>
        <ul>
          {
            tasks.map((el, index) => {
              return <li key={index}>{el} <button onClick={() => deleteTask(index)}>Delete Task</button></li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
