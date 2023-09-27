import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      const keyValue = e.key;
      switch (keyValue) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
        case '^':
        case '(':
        case ')':
          handleButtonClick(keyValue);
          break;
        case 'Enter':
          calculateResult();
          break;
        case 'Escape':
          clearInput();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleTrigFunction = (func) => {
    const radians = eval(input); // Assumes the input is in degrees
    try {
      const result = Math[func](radians * (Math.PI / 180)); // Convert degrees to radians
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleSquareRoot = () => {
    try {
      const result = Math.sqrt(eval(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="calculator">
          <input
            type="text"
            value={input}
            readOnly
            className="input"
          />
          <div className="button-grid">
            <div>
              <button onClick={() => handleButtonClick('7')}>7</button>
              <button onClick={() => handleButtonClick('8')}>8</button>
              <button onClick={() => handleButtonClick('9')}>9</button>
              <button onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div>
              <button onClick={() => handleButtonClick('4')}>4</button>
              <button onClick={() => handleButtonClick('5')}>5</button>
              <button onClick={() => handleButtonClick('6')}>6</button>
              <button onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div>
              <button onClick={() => handleButtonClick('1')}>1</button>
              <button onClick={() => handleButtonClick('2')}>2</button>
              <button onClick={() => handleButtonClick('3')}>3</button>
              <button onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div>
              <button onClick={clearInput}>C</button>
              <button onClick={() => handleButtonClick('0')}>0</button>
              <button onClick={() => handleButtonClick('.')}>.</button>
              <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div>
              <button onClick={handleSquareRoot}>√</button>
              <button onClick={() => handleButtonClick('^')}>^</button>
              <button onClick={() => handleButtonClick('log(')}>log</button>
              <button onClick={() => handleButtonClick('exp(')}>exp</button>
            </div>
            <div>
              <button onClick={() => handleTrigFunction('sin')}>sin</button>
              <button onClick={() => handleTrigFunction('cos')}>cos</button>
              <button onClick={() => handleTrigFunction('tan')}>tan</button>
              <button onClick={() => handleButtonClick('(')}>(</button>
              <button onClick={() => handleButtonClick(')')}>)</button>
            </div>
            <div>
              <button
                onClick={calculateResult}
                className="equals-button"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ScientificCalculator;
