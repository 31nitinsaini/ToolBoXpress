import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const BasicCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    const key = event.key;
    if (/[\d.+\-*/=]/.test(key)) {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      handleButtonClick('=');
    } else if (key === 'Backspace') {
      handleBackspace();
    }
  };

  const handleButtonClick = (value) => {
    switch (value) {
      case 'C':
        clearInput();
        break;
      case '=':
        evaluateExpression();
        break;
      default:
        appendToInput(value);
        break;
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const appendToInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const evaluateExpression = () => {
    try {
      setResult(new Function(`return ${input}`)());
    } catch (error) {
      setResult('Error');
    }
  };

  const buttonLayout = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  const styles = `
    /* BasicCalculator.css */
    .calculator {
      max-width: 300px;
      margin: 0 auto;
      background-color: #f3f3f3;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      text-align: center;
    }

    .display {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 10px;
    }

    .input-field {
      flex-grow: 1;
      padding: 10px;
      font-size: 24px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: right;
    }

    .result {
      font-size: 24px;
      margin-top: 10px;
    }

    .buttons-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }

    .calculator-button {
      padding: 10px;
      font-size: 24px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #007BFF;
      color: #fff;
      transition: background-color 0.3s;
    }

    .calculator-button.operator {
      background-color: #FF9500;
    }

    .calculator-button:hover {
      background-color: #0056b3;
    }

    .input-field.result-active {
      background-color: #eee; /* Change background color when result is displayed */
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <Header />
      <main>
        <div className="calculator">
          <div className="display">
            <input
              type="text"
              value={input}
              readOnly
              className="input-field"
            />
            <span className="result">{result}</span>
          </div>
          <div className="buttons-grid">
            {buttonLayout.map((button, index) => (
              <Button
                key={index}
                label={button}
                onClick={() => handleButtonClick(button)}
                isOperator={/[+\-*/=]/.test(button)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const Button = ({ label, onClick, isOperator }) => (
  <button
    onClick={onClick}
    className={`calculator-button ${isOperator ? 'operator' : ''}`}
  >
    {label}
  </button>
);

export default BasicCalculator;
