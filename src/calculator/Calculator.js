import React, {useState, useEffect} from 'react';
import './calculator.css';

const Calculator = (props) => {
  const [x_value, setXValue] = useState(0);
  const [y_value, setYValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('+')

  useEffect(() => {
    operation == '+' && setResult(x_value + y_value);
    operation == '-' && setResult(x_value - y_value);
    operation == '*' && setResult(x_value * y_value);
    operation == '/' && setResult(x_value / y_value);
  }, [x_value, y_value, operation]);

  const changeXValue = (event) => {
    const input = event.target.value;
    setXValue(parseInt(input));
  }

  const changeYValue = (event) => {
    const input = event.target.value;
    setYValue(parseInt(input));
  }

  const changeOperation = (event) => {
    const input = event.target.value;
    setOperation(input);
  }

  return (
    <div id='calculator'>
      <fieldset class='row'>
        <legend>Kalkulator:</legend>
        <div class='inputs'>
          <label for="x_value">First name:</label><br />
          <input id='x_value' value={x_value} onChange={(event) => changeXValue(event)}/>
        </div>
        <div class='inputs'>
          <label for="y_value">Last name:</label><br />
          <input id='y_value' value={y_value} onChange={(event) => changeYValue(event)}/><br />
        </div>
        <div class='inputs'>
          <label for="operation">Operation:</label><br />
          <select id="operation" onChange={(event) => changeOperation(event)}>
            <option value="+">Addition</option>
            <option value="-">Subtraction</option>
            <option value="*">Multiplication</option>
            <option value="/">Division</option>
          </select>
        </div>
        <div class='inputs'>
          <label for="result">Result:</label><br />
          <input id='result' value={result}/>
        </div>
      </fieldset>
    </div>
  )
}

export default Calculator;