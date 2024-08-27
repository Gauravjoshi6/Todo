import React from 'react';
import img from './build/star.png'

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <span>{task}</span>
          <button className="btn btn-danger" onClick={() => deleteTask(index)}>
            Delete
          </button>
          
        </div>
      ))}
    </div>
  );
}

export default TaskList;
