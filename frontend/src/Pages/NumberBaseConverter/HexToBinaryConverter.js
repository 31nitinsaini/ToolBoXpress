import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const HexToBinaryConverter = () => {
  const [hexInput, setHexInput] = useState('');
  const [binaryOutput, setBinaryOutput] = useState(null);

  const convertHexToBinary = () => {
    try {
      const decimalValue = parseInt(hexInput, 16);
      if (!isNaN(decimalValue)) {
        const binaryValue = decimalValue.toString(2);
        setBinaryOutput(binaryValue);
      } else {
        setBinaryOutput(null);
        alert('Invalid hex input. Please enter a valid hex number.');
      }
    } catch (error) {
      console.error('Error converting hex to binary:', error);
      setBinaryOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">Hex To Binary Converter</h2>
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
      <button className="btn btn-primary" onClick={convertHexToBinary}>Convert to Binary</button>
      {binaryOutput !== null && (
        <div className="mt-3">
          <h3>Binary Output:</h3>
          <p>{binaryOutput}</p>
        </div>
      )}
    </div>
    </main>
    <RatingComponent/>
    <Footer/>
    </>
  );
};

export default HexToBinaryConverter;
