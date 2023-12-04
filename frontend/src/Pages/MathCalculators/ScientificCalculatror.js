import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

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
  const currentUrl = window.location.href;
  return (
   <>
    <Helmet>
      <title>ToolboXpress - Scientific Calculator</title>
      <meta name="description" content="Perform advanced mathematical calculations with ToolboXpress Scientific Calculator. Solve trigonometric, logarithmic, and other complex functions. Fast, intuitive, and free!" />
      <meta name="keywords" content="Scientific calculator, mathematical calculations, trigonometry, logarithm, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Scientific Calculator" />
      <meta property="og:description" content="Perform advanced mathematical calculations with ToolboXpress Scientific Calculator. Solve trigonometric, logarithmic, and other complex functions. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Scientific Calculator" />
      <meta name="twitter:description" content="Perform advanced mathematical calculations with ToolboXpress Scientific Calculator. Solve trigonometric, logarithmic, and other complex functions. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>

   <Header/>
   <main>
    <div className='container my-5'>
     {/* Heading Section */}
     <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '2em', color: '#333' }}>Scientific Calculator</h1>
          <p style={{ fontSize: '1.2em', color: '#555' }}>
            Perform advanced mathematical calculations with ToolboXpress Scientific Calculator. Solve trigonometric,
            logarithmic, and other complex functions. Fast, intuitive, and free!
          </p>
        </div>
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
 </div>
 </main>
 <RatingComponent/>
   <Footer/>
   </>
  );
};

export default Calculator;
