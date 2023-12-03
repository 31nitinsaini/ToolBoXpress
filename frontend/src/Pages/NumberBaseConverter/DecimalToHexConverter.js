import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const DecimalToHexConverter = () => {
  const [decimalInput, setDecimalInput] = useState('');
  const [hexOutput, setHexOutput] = useState(null);

  const convertDecimalToHex = () => {
    try {
      const decimalValue = parseInt(decimalInput, 10);
      if (!isNaN(decimalValue)) {
        const hexValue = decimalValue.toString(16).toUpperCase();
        setHexOutput(hexValue);
      } else {
        setHexOutput(null);
        alert('Invalid decimal input. Please enter a valid decimal number.');
      }
    } catch (error) {
      console.error('Error converting decimal to hex:', error);
      setHexOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">Decimal To Hex Converter</h2>
      <div className="mb-3">
        <label htmlFor="decimalInput" className="form-label">Decimal Input:</label>
        <input
          type="text"
          id="decimalInput"
          className="form-control"
          value={decimalInput}
          onChange={(e) => setDecimalInput(e.target.value)}
          placeholder="Enter decimal number"
        />
      </div>
      <button className="btn btn-primary" onClick={convertDecimalToHex}>Convert to Hex</button>
      {hexOutput !== null && (
        <div className="mt-3">
          <h3>Hex Output:</h3>
          <p>{hexOutput}</p>
        </div>
      )}
    </div>
    </main>
    <RatingComponent/>
    <Footer/>
    </>
   
  );
};

export default DecimalToHexConverter;
