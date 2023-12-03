import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const BinaryBitwiseXORCalculator = () => {
  const [binaryNumber1, setBinaryNumber1] = useState('');
  const [binaryNumber2, setBinaryNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e, setBinaryNumber) => {
    const input = e.target.value;
    // Ensure the input is a binary number
    if (/^[01]+$/.test(input) || input === '') {
      setBinaryNumber(input);
    }
  };

  const calculateBitwiseXOR = () => {
    // Parse binary numbers as integers and perform bitwise XOR
    const bitwiseXOR = parseInt(binaryNumber1, 2) ^ parseInt(binaryNumber2, 2);
    // Convert the result back to binary and update the result state
    setResult(bitwiseXOR.toString(2));
  };

  return (
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2>Binary Bitwise XOR Calculator</h2>
      <div className="mb-3">
        <label htmlFor="binaryNumber1" className="form-label">Binary Number 1:</label>
        <input
          type="text"
          id="binaryNumber1"
          className="form-control"
          value={binaryNumber1}
          onChange={(e) => handleInputChange(e, setBinaryNumber1)}
          placeholder="Enter binary number 1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="binaryNumber2" className="form-label">Binary Number 2:</label>
        <input
          type="text"
          id="binaryNumber2"
          className="form-control"
          value={binaryNumber2}
          onChange={(e) => handleInputChange(e, setBinaryNumber2)}
          placeholder="Enter binary number 2"
        />
      </div>
      <button className="btn btn-primary" onClick={calculateBitwiseXOR}>Calculate Bitwise XOR</button>
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

export default BinaryBitwiseXORCalculator;
