import { useState } from 'react'
import './Todo.css'
import CreateTask from './CreateTask';
import Task from './Task';

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
        const newTask = [...tasks, {
            title: newTitle,
            completed: false
        }] ;
        setTasks(newTask);
    }

    function completeTask(index) {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    function removeTask(index) {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

  return (
    <div  className="todo-container">
        <div className="header">TODO ITEMS</div> 
          <div className="tasks">
              {tasks.map((task, index) => (
                  <Task key={task.title} task={task} index={index} completeTask={completeTask}
                      removeTask={removeTask}
                  />
              ))}
          </div> 
          <div className="create-task" >             
            <CreateTask onAddTask={addTask}/>       
          </div>
    </div>
  )
}

export default Todo
