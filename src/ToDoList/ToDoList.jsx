import React, { useState } from 'react';
import styles from './ToDoList.module.css';

function ToDoList() {
    const [task, setTask] = useState("");
    const [taskList, updateList] = useState([]);

    function createTask() {
        if (task.trim() === "") return;
        updateList([...taskList, task]); 
        setTask(""); 
    }

    return (
        <>
            <h1>To Do List in React</h1>
            <div className="inputs">
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="Scrie un task..." 
                />
                <button onClick={createTask}>Create Task</button>
            </div>

            <div className={styles.tile}>
                {taskList.map((t, index) => (
                    <p key={index}>{t}</p>
                ))}
            </div>
        </>
    );
}

export default ToDoList;
