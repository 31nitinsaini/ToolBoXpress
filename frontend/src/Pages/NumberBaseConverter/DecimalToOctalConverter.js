import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
const DecimalToOctalConverter = () => {
  const [decimalInput, setDecimalInput] = useState('');
  const [octalOutput, setOctalOutput] = useState(null);

  const convertDecimalToOctal = () => {
    try {
      const decimalValue = parseInt(decimalInput, 10);
      if (!isNaN(decimalValue)) {
        const octalValue = decimalValue.toString(8);
        setOctalOutput(octalValue);
      } else {
        setOctalOutput(null);
        alert('Invalid decimal input. Please enter a valid decimal number.');
      }
    } catch (error) {
      console.error('Error converting decimal to octal:', error);
      setOctalOutput(null);
      alert('An error occurred while converting. Please try again.');
    }
  };

  return (
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">Decimal To Octal Converter</h2>
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
      <button className="btn btn-primary" onClick={convertDecimalToOctal}>Convert to Octal</button>
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

export default DecimalToOctalConverter;
