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

  return (
    <>
    <style dangerouslySetInnerHTML={{__html: "/* BasicCalculator.css */\n\n.calculator {\n  max-width: 300px;\n  margin: 0 auto;\n  background-color: #f3f3f3;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n}\n\n.display {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-bottom: 10px;\n}\n\n.input-field {\n  flex-grow: 1;\n  padding: 10px;\n  font-size: 24px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  text-align: right;\n}\n\n.result {\n  font-size: 24px;\n  margin-top: 10px;\n}\n\n.buttons-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n}\n\n.calculator-button {\n  padding: 10px;\n  font-size: 24px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: #007BFF;\n  color: #fff;\n  transition: background-color 0.3s;\n}\n\n.calculator-button.operator {\n  background-color: #FF9500;\n}\n\n.calculator-button:hover {\n  background-color: #0056b3;\n}\n\n.input-field.result-active {\n  background-color: #eee; /* Change background color when result is displayed */\n}\n" }} />

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
