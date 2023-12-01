import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearInput();
    } else {
      updateInput(value);
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = evaluate(input);
      setResult(calculatedResult.toString());
      setError('');
    } catch (error) {
      setResult('');
      setError('Error');
    }
  };


  const clearInput = () => {
    setInput('');
    setResult('');
    setError('');
  };

  const updateInput = (value) => {
    setInput((prevInput) => prevInput + value);
    setResult('');
    setError('');
  };

  return (
   <>
   <Header/>
   <div className="calculator">
   <div className="input">{input}</div>
   <div className="result">{result}</div>
   {error && <div className="error">{error}</div>}

   <div className="buttons">
     <button onClick={() => handleButtonClick('7')}>7</button>
     <button onClick={() => handleButtonClick('8')}>8</button>
     <button onClick={() => handleButtonClick('9')}>9</button>
     <button onClick={() => handleButtonClick('/')}>/</button>

     <button onClick={() => handleButtonClick('4')}>4</button>
     <button onClick={() => handleButtonClick('5')}>5</button>
     <button onClick={() => handleButtonClick('6')}>6</button>
     <button onClick={() => handleButtonClick('*')}>*</button>

     <button onClick={() => handleButtonClick('1')}>1</button>
     <button onClick={() => handleButtonClick('2')}>2</button>
     <button onClick={() => handleButtonClick('3')}>3</button>
     <button onClick={() => handleButtonClick('-')}>-</button>

     <button onClick={() => handleButtonClick('0')}>0</button>
     <button onClick={() => handleButtonClick('.')}>.</button>
     <button onClick={calculateResult}>=</button>
     <button onClick={() => handleButtonClick('+')}>+</button>

     <button onClick={() => handleButtonClick('(')}>(</button>
     <button onClick={() => handleButtonClick(')')}>)</button>
     <button onClick={() => handleButtonClick('C')}>C</button>

     <button onClick={() => handleButtonClick('sqrt(')}>√</button>
     <button onClick={() => handleButtonClick('log(')}>log</button>
     <button onClick={() => handleButtonClick('ln(')}>ln</button>
     <button onClick={() => handleButtonClick('exp(')}>e^x</button>

     <button onClick={() => handleButtonClick('sin(')}>sin</button>
     <button onClick={() => handleButtonClick('cos(')}>cos</button>
     <button onClick={() => handleButtonClick('tan(')}>tan</button>
     <button onClick={() => handleButtonClick('^')}>^</button>
   </div>
 </div>
   <Footer/>
   </>
  );
};

export default Calculator;
