import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="profile">
          <img src="profile-pic-url" alt="User" className="profile-pic" />
          <h4>Hey, ABCD</h4>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#all-tasks">All Tasks</a></li>
            <li><a href="#today" className="active">Today</a></li>
            <li><a href="#important">Important</a></li>
            <li><a href="#planned">Planned</a></li>
            <li><a href="#assigned">Assigned to me</a></li>
          </ul>
        </nav>
        <div className="task-stats">
          <div className="circle">
            <span>11</span>
          </div>
          <p>Today Tasks</p>
        </div>
      </aside>
      
      <main className="main-content">
        <header className="task-header">
          <h2>Today</h2>
          <TaskInput addTask={addTask} />
        </header>
        <section className="task-section">
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </section>
      </main>
    </div>
  );
}

export default App;
