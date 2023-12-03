import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const OctalToDecimalConverter = () => {
  const [octalInput, setOctalInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState(null);

  const convertOctalToDecimal = () => {
    try {
      const decimalValue = parseInt(octalInput, 8);
      if (!isNaN(decimalValue)) {
        setDecimalOutput(decimalValue);
      } else {
        setDecimalOutput(null);
        alert('Invalid octal input. Please enter a valid octal number.');
      }
    } catch (error) {
      console.error('Error converting octal to decimal:', error);
      setDecimalOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
   
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">Octal To Decimal Converter</h2>
      <div className="mb-3">
        <label htmlFor="octalInput" className="form-label">Octal Input:</label>
        <input
          type="text"
          id="octalInput"
          className="form-control"
          value={octalInput}
          onChange={(e) => setOctalInput(e.target.value)}
          placeholder="Enter octal number"
        />
      </div>
      <button className="btn btn-primary" onClick={convertOctalToDecimal}>Convert to Decimal</button>
      {decimalOutput !== null && (
        <div className="mt-3">
          <h3>Decimal Output:</h3>
          <p>{decimalOutput}</p>
        </div>
      )}
    </div>
    </main>
    <RatingComponent/>
    <Footer/>
    </>
  );
};

export default OctalToDecimalConverter;
