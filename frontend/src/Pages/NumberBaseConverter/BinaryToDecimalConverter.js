import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const BinaryToDecimalConverter = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState(null);

  const convertBinaryToDecimal = () => {
    try {
      const decimalValue = parseInt(binaryInput, 2);
      if (!isNaN(decimalValue)) {
        setDecimalOutput(decimalValue);
      } else {
        setDecimalOutput(null);
        alert('Invalid binary input. Please enter a valid binary number.');
      }
    } catch (error) {
      console.error('Error converting binary to decimal:', error);
      setDecimalOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
   <>
   <Header/>
   <main>
   <div className="container mt-5">
      <h2 className="mb-4">Binary To Decimal Converter</h2>
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
      <button className="btn btn-primary" onClick={convertBinaryToDecimal}>Convert to Decimal</button>
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

export default BinaryToDecimalConverter;
