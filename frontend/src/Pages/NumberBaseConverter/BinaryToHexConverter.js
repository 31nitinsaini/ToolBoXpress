import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import Header from '../../Components/Header';

const BinaryToHexConverter = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [hexOutput, setHexOutput] = useState(null);

  const convertBinaryToHex = () => {
    try {
      const decimalValue = parseInt(binaryInput, 2);
      if (!isNaN(decimalValue)) {
        const hexValue = decimalValue.toString(16).toUpperCase();
        setHexOutput(hexValue);
      } else {
        setHexOutput(null);
        alert('Invalid binary input. Please enter a valid binary number.');
      }
    } catch (error) {
      console.error('Error converting binary to hex:', error);
      setHexOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
    <>
   <Header/>
   <main>
   <div className="container mt-5">
      <h2 className="mb-4">Binary To Hex Converter</h2>
      <div className="mb-3">
        <label htmlFor="binaryInput" className="form-label">Binary Input:</label>
        <input
          type="text"
          id="binaryInput"
          className="form-control"
          value={binaryInput}
          onChange={(e) => setBinaryInput(e.target.value)}
          placeholder="Enter binary number"
        />
      </div>
      <button className="btn btn-primary" onClick={convertBinaryToHex}>Convert to Hex</button>
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

export default BinaryToHexConverter;
