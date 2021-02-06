import React, {useState} from 'react';
import './TaskElement.css';

const TaskElement = (props) => {
  return (
    <div className="row">
      <div  className={props.isDone ? "taskElement taskDone" : "taskElement"}
            onClick={props.markDone}>
        {props.name}
      </div>
      <div class="deleteTaskButton" onClick={props.deleteTask}>X</div>
    </div>

  )
}

export default TaskElement;
