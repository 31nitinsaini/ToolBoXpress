import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
const OctalToHexConverter = () => {
  const [octalInput, setOctalInput] = useState('');
  const [hexOutput, setHexOutput] = useState(null);

  const convertOctalToHex = () => {
    try {
      const decimalValue = parseInt(octalInput, 8);
      if (!isNaN(decimalValue)) {
        const hexValue = decimalValue.toString(16).toUpperCase();
        setHexOutput(hexValue);
      } else {
        setHexOutput(null);
        alert('Invalid octal input. Please enter a valid octal number.');
      }
    } catch (error) {
      console.error('Error converting octal to hex:', error);
      setHexOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
    
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">Octal To Hex Converter</h2>
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
      <button className="btn btn-primary" onClick={convertOctalToHex}>Convert to Hex</button>
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

export default OctalToHexConverter;
