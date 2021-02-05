import React, {useState} from 'react';
import './App.css';
import Calculator from './calculator/Calculator.js'
import TaskList from './taskList/TaskList.js'
import Menu from './Menu.js'

const App = () => {
  const [page, setPage] = useState("TaskList")

  const onClickMenuButton = () => {

  }

  const displayAppPage = () => {
    if (page == 'Calculator') {
      return <Calculator />
    } else if (page == 'TaskList')
      return <TaskList />
  }

  return (
    <div id="container">
      <div class="row">
        <div id="menu">
          <Menu onClick={name => setPage(name)}/>
        </div>
        <div id="app">
          {displayAppPage()}
        </div>
      </div>
    </div>
  )
}

export default App;
