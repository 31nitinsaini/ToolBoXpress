import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const BinaryBitwiseNOTCalculator = () => {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    // Ensure the input is a binary number
    if (/^[01]+$/.test(input) || input === '') {
      setBinaryNumber(input);
    }
  };

  const calculateBitwiseNOT = () => {
    // Parse the binary number as an integer and perform bitwise NOT
    const bitwiseNOT = ~parseInt(binaryNumber, 2);
    // Convert the result back to binary and update the result state
    setResult(bitwiseNOT.toString(2));
  };

  return (
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2>Binary Bitwise NOT Calculator</h2>
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
      <button className="btn btn-primary" onClick={calculateBitwiseNOT}>Calculate Bitwise NOT</button>
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

export default BinaryBitwiseNOTCalculator;
