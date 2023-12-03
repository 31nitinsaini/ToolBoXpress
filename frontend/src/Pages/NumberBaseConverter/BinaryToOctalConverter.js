import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const BinaryToOctalConverter = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [octalOutput, setOctalOutput] = useState(null);

  const convertBinaryToOctal = () => {
    try {
      const decimalValue = parseInt(binaryInput, 2);
      if (!isNaN(decimalValue)) {
        const octalValue = decimalValue.toString(8);
        setOctalOutput(octalValue);
      } else {
        setOctalOutput(null);
        alert('Invalid binary input. Please enter a valid binary number.');
      }
    } catch (error) {
      console.error('Error converting binary to octal:', error);
      setOctalOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
    
    <>
    <Header/>
    <main><div className="container mt-5">
      <h2 className="mb-4">Binary To Octal Converter</h2>
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
      <button className="btn btn-primary" onClick={convertBinaryToOctal}>Convert to Octal</button>
      {octalOutput !== null && (
        <div className="mt-3">
          <h3>Octal Output:</h3>
          <p>{octalOutput}</p>
        </div>
      )}
    </div></main>
    <RatingComponent/>
    <Footer/>
    </>

  );
};

export default BinaryToOctalConverter;
