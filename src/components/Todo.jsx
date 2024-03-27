import { useState } from 'react'
import './Todo.css'
import CreateTask from './CreateTask';

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

    function addTask(newTitle) {
        if (newTitle === '') return;
        const newTask =[...tasks, {
            title: newTitle,
            completed: false
        }] ;
        setTasks(newTask);
    }

  return (
    <div  className="todo-container">
        <div className="header">TODO ITEMS</div> 
          <div className="tasks">
              {tasks.map((task) => (
                  <Task key={task.title} task={task} tasks={tasks} />
              ))}
          </div> 
        <CreateTask  onAdd={addTask}/>       
        <button onClick={()=>{setTasks(tasks.filter(task => !task.completed))}} >Remove Completed Tasks</button><br/>
    </div>
  )
}

export default Todo
