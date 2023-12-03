import React, { useState } from 'react';
import Ripemd160 from 'ripemd160';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const Ripemd160Generator = () => {
  const [inputText, setInputText] = useState('');
  const [generatedRipemd160, setGeneratedRipemd160] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const generateRipemd160 = () => {
    const ripemd160Instance = new Ripemd160();
    ripemd160Instance.update(inputText);

    const ripemd160Value = ripemd160Instance.digest('hex');
    setGeneratedRipemd160(ripemd160Value);
  };

  return (
    <>
      <Header />
      <main>
        <div className="container mt-5">
          <h2 className="mb-4">RIPEMD-160 Generator</h2>
          <div className="mb-3">
            <label htmlFor="inputText" className="form-label">Input Text:</label>
            <input
              type="text"
              id="inputText"
              className="form-control"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter text"
            />
          </div>
          <button className="btn btn-primary" onClick={generateRipemd160}>Generate RIPEMD-160</button>
          {generatedRipemd160 && (
            <div className="mt-4">
              <h3>Generated RIPEMD-160:</h3>
              <p>{generatedRipemd160}</p>
            </div>
          )}
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default Ripemd160Generator;
