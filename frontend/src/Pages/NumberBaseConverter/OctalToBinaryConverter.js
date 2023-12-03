import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const OctalToBinaryConverter = () => {
  const [octalInput, setOctalInput] = useState('');
  const [binaryOutput, setBinaryOutput] = useState(null);

  const convertOctalToBinary = () => {
    try {
      const decimalValue = parseInt(octalInput, 8);
      if (!isNaN(decimalValue)) {
        const binaryValue = decimalValue.toString(2);
        setBinaryOutput(binaryValue);
      } else {
        setBinaryOutput(null);
        alert('Invalid octal input. Please enter a valid octal number.');
      }
    } catch (error) {
      console.error('Error converting octal to binary:', error);
      setBinaryOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
   
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">Octal To Binary Converter</h2>
      <div className="mb-3">
        <label htmlFor="octalInput" className="form-label">Octal Input:</label>
        <input
          type="text"
          id="octalInput"
          className="form-control"
          value={octalInput}
          onChange={(e) => setOctalInput(e.target.value)}
          placeholder="Enter octal number"
        />
      </div>
      <button className="btn btn-primary" onClick={convertOctalToBinary}>Convert to Binary</button>
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

export default OctalToBinaryConverter;
