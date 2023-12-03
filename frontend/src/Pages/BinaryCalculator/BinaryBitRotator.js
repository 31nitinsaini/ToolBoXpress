import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const BinaryBitRotator = () => {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [rotation, setRotation] = useState('');
  const [resultLeft, setResultLeft] = useState('');
  const [resultRight, setResultRight] = useState('');

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

  const calculateRotationLeft = () => {
    const binaryLength = binaryNumber.length;
    const rotatedBinary = binaryNumber.slice(rotation % binaryLength) + binaryNumber.slice(0, rotation % binaryLength);
    setResultLeft(rotatedBinary);
  };

  const calculateRotationRight = () => {
    const binaryLength = binaryNumber.length;
    const rotatedBinary = binaryNumber.slice(binaryLength - rotation % binaryLength) + binaryNumber.slice(0, binaryLength - rotation % binaryLength);
    setResultRight(rotatedBinary);
  };

  return (
   <>
   <Header/>
    <main>
    <div className="container mt-5">
      <h2>Binary Bit Rotator</h2>
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
      <button className="btn btn-primary me-2" onClick={calculateRotationLeft}>Rotate Left</button>
      <button className="btn btn-primary" onClick={calculateRotationRight}>Rotate Right</button>
      {resultLeft && (
        <div className="mt-4">
          <h3>Result (Left Rotation):</h3>
          <p>{resultLeft}</p>
        </div>
      )}
      {resultRight && (
        <div className="mt-4">
          <h3>Result (Right Rotation):</h3>
          <p>{resultRight}</p>
        </div>
      )}
    </div>
    </main>
   <RatingComponent/>
   <Footer/>
   </>
  );
};

export default BinaryBitRotator;
