import './App.css';
import Calculator from './calculator/Calculator.js'

const App = () => {

  return (
    <div id="container">
      <div class="row">
        <div id="menu">
          Menu
        </div>
        <div id="app">
          <Calculator />
        </div>
      </div>
    </div>
  )
}

export default App;
