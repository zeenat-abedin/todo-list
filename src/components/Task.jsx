
function Task({ task, index, completeTask }) {
    return (
    <div className='task' style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {task.title} 
        <button onClick={() => completeTask(index)}>Complete</button>
    </div>
    )
}

export default Task;