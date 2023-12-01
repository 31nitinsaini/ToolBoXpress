import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Calculator.css';

const BasicCalculator = () => {
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
      const calculatedResult = eval(input);
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
   <div className="calculator my-5">
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

        <button  onClick={clearInput}>Clear</button>
      </div>
    </div>
   <Footer/>
   </>
  );
};

export default BasicCalculator;
