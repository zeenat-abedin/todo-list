import { useState } from 'react'
import './Todo.css'

function Task({ task, onDelete }) {
    return <div className='task' >
        {task.title} 
    </div>
}


function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Buying a pizza",
            completed: false
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: true
        }
    ])

  return (
    <div  className="todo-container">
        <div className="header">TODO ITEMS</div> 
          <div className="tasks">
              {tasks.map((task) => (
                  <Task key={task.title} task={task} tasks={tasks} />
              ))}
        </div>          
    </div>
  )
}

export default Todo
