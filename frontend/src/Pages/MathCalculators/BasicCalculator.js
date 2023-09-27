import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const BasicCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (/[0-9.+\-*/C=]/.test(key)) {
      handleButtonClick(key);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
<style dangerouslySetInnerHTML={{__html: "\n    /* BasicCalculator.css */\n\n.calculator {\n  max-width: 400px;\n  margin: 0 auto;\n  background-color: #f3f3f3;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.input-field {\n  flex-grow: 1;\n  padding: 10px;\n  font-size: 24px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.result {\n  font-size: 24px;\n}\n\n.buttons-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n}\n\nbutton {\n  padding: 10px;\n  font-size: 24px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: #007BFF;\n  color: #fff;\n  transition: background-color 0.3s;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}\n\n    " }} />

      <Header />
      <main>
        <div className="calculator">
          <div className="display">
            <input
              type="text"
              value={input}
              readOnly
              className="input-field"
              style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            />
            <span className="result">{result}</span>
          </div>
          <div className="buttons-grid">
            {/* Buttons here */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BasicCalculator;
