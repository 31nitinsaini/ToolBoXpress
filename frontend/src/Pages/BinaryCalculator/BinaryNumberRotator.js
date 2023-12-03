import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';


const BinaryNumberRotator = () => {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [rotation, setRotation] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    // Ensure the input is a binary number
    if (/^[01]+$/.test(input) || input === '') {
      setBinaryNumber(input);
    }
  };

  const handleRotationChange = (e) => {
    const input = e.target.value;
    // Ensure the input is a valid rotation value
    if (/^[0-9]+$/.test(input) || input === '') {
      setRotation(input);
    }
  };

  const calculateRotation = () => {
    const binaryLength = binaryNumber.length;
    const rotatedBinary = binaryNumber.slice(binaryLength - rotation % binaryLength) + binaryNumber.slice(0, binaryLength - rotation % binaryLength);
    setResult(rotatedBinary);
  };

  return (
   
      <>
      <Header/>
       <main>
       <div className="container mt-5">
      <h2>Binary Number Rotator</h2>
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
      <div className="mb-3">
        <label htmlFor="rotation" className="form-label">Rotation Value:</label>
        <input
          type="text"
          id="rotation"
          className="form-control"
          value={rotation}
          onChange={handleRotationChange}
          placeholder="Enter rotation value"
        />
      </div>
      <button className="btn btn-primary" onClick={calculateRotation}>Calculate Rotation</button>
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

export default BinaryNumberRotator;
