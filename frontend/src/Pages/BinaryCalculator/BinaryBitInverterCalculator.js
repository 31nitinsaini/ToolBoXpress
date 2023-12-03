import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
const BinaryBitInverterCalculator = () => {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    // Ensure the input is a binary number
    if (/^[01]+$/.test(input) || input === '') {
      setBinaryNumber(input);
    }
  };

  const calculateBitInverter = () => {
    // Invert each bit of the binary number
    const invertedBinary = binaryNumber.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
    setResult(invertedBinary);
  };

  return (
   <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2>Binary Bit Inverter</h2>
      <div className="mb-3">
        <label htmlFor="binaryNumber" className="form-label">Binary Number:</label>
        <input
          type="text"
          id="binaryNumber"
          className="form-control"
          value={binaryNumber}
          onChange={handleInputChange}
          placeholder="Enter binary number"
        />
      </div>
      <button className="btn btn-primary" onClick={calculateBitInverter}>Calculate Bit Inverter</button>
      {result && (
        <div className="mt-4">
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
    </main>
    <RatingComponent/>
    <Footer/>
   </>
  );
};

export default BinaryBitInverterCalculator;
