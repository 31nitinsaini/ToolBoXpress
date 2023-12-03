import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const HexToDecimalConverter = () => {
  const [hexInput, setHexInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState(null);

  const convertHexToDecimal = () => {
    try {
      const decimalValue = parseInt(hexInput, 16);
      if (!isNaN(decimalValue)) {
        setDecimalOutput(decimalValue);
      } else {
        setDecimalOutput(null);
        alert('Invalid hex input. Please enter a valid hex number.');
      }
    } catch (error) {
      console.error('Error converting hex to decimal:', error);
      setDecimalOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
  <>
  <Header/>

  <main>
  <div className="container mt-5">
      <h2 className="mb-4">Hex To Decimal Converter</h2>
      <div className="mb-3">
        <label htmlFor="hexInput" className="form-label">Hex Input:</label>
        <input
          type="text"
          id="hexInput"
          className="form-control"
          value={hexInput}
          onChange={(e) => setHexInput(e.target.value)}
          placeholder="Enter hex number"
        />
      </div>
      <button className="btn btn-primary" onClick={convertHexToDecimal}>Convert to Decimal</button>
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

export default HexToDecimalConverter;