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
    <div className="taskElement row">
      <div className={props.isDone ? "taskDone" : ""}>
        {props.name}

      </div>
      <div className="taskElementButton">
        <div className="taskButtonContainer">
          <div id="deleteTask" onClick={props.deleteTask}>X</div>
          <input name="isDone" type="checkbox"
                checked={isChecked}
          />
          <span class="checkmark" onClick={() => changeChecked()}></span>
        </div>
      </div>
    </div>
  )
}

export default TaskElement;
