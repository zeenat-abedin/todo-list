
function Task({ task, index, completeTask }) {
    return (
    <div className='task' style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {task.title} 
    </div>
    )
}

export default Task;