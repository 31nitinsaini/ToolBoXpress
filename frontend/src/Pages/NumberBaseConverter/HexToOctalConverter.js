import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const HexToOctalConverter = () => {
  const [hexInput, setHexInput] = useState('');
  const [octalOutput, setOctalOutput] = useState(null);

  const convertHexToOctal = () => {
    try {
      const decimalValue = parseInt(hexInput, 16);
      if (!isNaN(decimalValue)) {
        const octalValue = decimalValue.toString(8);
        setOctalOutput(octalValue);
      } else {
        setOctalOutput(null);
        alert('Invalid hex input. Please enter a valid hex number.');
      }
    } catch (error) {
      console.error('Error converting hex to octal:', error);
      setOctalOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">Hex To Octal Converter</h2>
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
      <button className="btn btn-primary" onClick={convertHexToOctal}>Convert to Octal</button>
      {octalOutput !== null && (
        <div className="mt-3">
          <h3>Octal Output:</h3>
          <p>{octalOutput}</p>
        </div>
      )}
    </div>
    </main>
    <RatingComponent/>
    <Footer/>
    </>
  );
};

export default HexToOctalConverter;
