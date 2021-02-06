import React, {useState} from 'react';
import './TaskElement.css';

const TaskElement = (props) => {
  const [isChecked, setChecked] = useState(false)

  const changeChecked = () => {
    let temp = !isChecked
    setChecked(temp)
    props.markDone()
  }

  return (
    <div className="row">
      <div  className={props.isDone ? "taskElement taskDone" : "taskElement"}
            onClick={() => changeChecked()}>
        {props.name}
      </div>
      <div class="deleteTaskButton" onClick={props.deleteTask}>X</div>
    </div>

  )
}

export default TaskElement;
