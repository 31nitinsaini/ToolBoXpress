import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
const DecimalToBinaryConverter = () => {
  const [decimalInput, setDecimalInput] = useState('');
  const [binaryOutput, setBinaryOutput] = useState(null);

  const convertDecimalToBinary = () => {
    try {
      const decimalValue = parseInt(decimalInput, 10);
      if (!isNaN(decimalValue)) {
        const binaryValue = decimalValue.toString(2);
        setBinaryOutput(binaryValue);
      } else {
        setBinaryOutput(null);
        alert('Invalid decimal input. Please enter a valid decimal number.');
      }
    } catch (error) {
      console.error('Error converting decimal to binary:', error);
      setBinaryOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">Decimal To Binary Converter</h2>
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
      <button className="btn btn-primary" onClick={convertDecimalToBinary}>Convert to Binary</button>
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

export default DecimalToBinaryConverter;
