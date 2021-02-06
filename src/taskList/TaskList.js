import React, {useState, useEffect} from 'react';
import './TaskList.css';
import TaskElement from './TaskElement.js'

const TaskList = (props) => {
  const [tasks, setTasks] = useState([{name: "Task 1", isDone: false},{name: "Task 2", isDone: false}])
  const [newTask, setNewTask] = useState("");

  const markDone = (name) => {
    let temp = [...tasks]
    temp.forEach((item, i) => {
      if (item.name === name) {
        item.isDone = !item.isDone
      }
    });
    let finished = []
    let notFinished = []
    temp.forEach((item, i) => {
      if (item.isDone == false) {
        notFinished.push(item)
      } else if (item.isDone == true) {
        finished.push(item)
      }
    });

    setTasks(notFinished.concat(finished))
  }

  const deleteTask = (name) => {
    let temp = [...tasks]
    let index = ''
    temp.forEach((item, i) => {
      if (item.name === name) {
        index = i
      }
    });
    temp.splice(index, 1)
    setTasks(temp)
  }

  const changeNewTask = (event) => {
    let input = event.target.value;
    setNewTask(input);
  }

  const addTask = () => {
    if (newTask != "") {
      const temp = [{name: newTask, isDone: false}, ...tasks]
      setTasks(temp)
      setNewTask("")
    }
  }

  return (
    <div id='taskList'>
      <fieldset>
        <legend>To do list:</legend>
          <div id="newTaskContainer" className="row">
            <input id='newTask' value={newTask} onChange={(event) => changeNewTask(event)}/>
            <div id="addTaskButton" onClick={() => addTask()}>Add</div>
          </div>
          <ul>
          {tasks.map(task =>
              <li><TaskElement key={task.name}
                          name={task.name}
                          isDone={task.isDone}
                          markDone={() => markDone(task.name)}
                          deleteTask={() => deleteTask(task.name)} /></li>
            )}
          </ul>
      </fieldset>
    </div>
  )
}

export default TaskList;
