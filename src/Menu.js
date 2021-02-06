import React from 'react';
import './Menu.css';

const Menu = (props) => {

  return (
    <div>
      <div id="menuButtonTaskList" className="menuButtonContainer" onClick={() => props.onClick("TaskList")}>Task list</div>
      <div id="menuButtonCalculator" className="menuButtonContainer" onClick={() => props.onClick("Calculator")}>Calculator</div>
    </div>
  )
}

export default Menu;
