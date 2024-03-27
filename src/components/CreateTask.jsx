import { useState } from "react";

function CreateTask({ onAddTask }) {
    const [value, setValue] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
            
        onAddTask(value);
        setValue("");
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

export default  CreateTask; 
    