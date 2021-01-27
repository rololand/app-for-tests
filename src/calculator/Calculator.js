import React, {useState, useEffect} from 'react';
import './calculator.css';

const Calculator = (props) => {
  const [x_value, setXValue] = useState(0);
  const [y_value, setYValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('+')

  useEffect(() => {
    operation == '+' && setResult(parseFloat(x_value) + parseFloat(y_value));
    operation == '-' && setResult(parseFloat(x_value) - parseFloat(y_value));
    operation == '*' && setResult(parseFloat(x_value) * parseFloat(y_value));
    operation == '/' && setResult(parseFloat(x_value) / parseFloat(y_value));
  }, [x_value, y_value, operation]);

  const changeXValue = (event) => {
    let input = event.target.value;
    input = input.replace(',','.')
    setXValue(input);
  }

  const changeYValue = (event) => {
    let input = event.target.value;
    input = input.replace(',','.')
    setYValue(input);
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
          <label for="x_value">X value:</label><br />
          <input id='x_value' value={x_value} onChange={(event) => changeXValue(event)}/>
        </div>
        <div class='inputs'>
          <label for="y_value">Y value:</label><br />
          <input id='y_value' value={y_value} onChange={(event) => changeYValue(event)}/><br />
        </div>
        <div class='inputs'>
          <label for="operation">Operation:</label><br />
          <select id="operation" onChange={(event) => changeOperation(event)}>
            <option value="+">X+Y</option>
            <option value="-">X-Y</option>
            <option value="*">X*Y</option>
            <option value="/">X/Y</option>
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
