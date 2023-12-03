import React, { useState } from 'react';
import { createHmac } from 'crypto-browserify';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const HMACGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [hmacResult, setHMACResult] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleKeyChange = (e) => {
        setSecretKey(e.target.value);
    };

    const generateHMAC = () => {
        if (!inputText || !secretKey) {
            alert('Please enter input text and secret key.');
            return;
        }

        const hmac = createHmac('sha256', secretKey).update(inputText).digest('hex');
        setHMACResult(hmac);
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2 className="mb-4">HMAC Generator</h2>
                    <div className="mb-3">
                        <label htmlFor="inputText" className="form-label">Input Text:</label>
                        <textarea
                            id="inputText"
                            className="form-control"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Enter text to hash"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="secretKey" className="form-label">Secret Key:</label>
                        <input
                            type="password"
                            id="secretKey"
                            className="form-control"
                            value={secretKey}
                            onChange={handleKeyChange}
                            placeholder="Enter secret key"
                        />
                    </div>
                    <button className="btn btn-primary" onClick={generateHMAC}>Generate HMAC</button>
                    {hmacResult && (
                        <div className="mt-4">
                            <h3>HMAC Result:</h3>
                            <p>{hmacResult}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>
    );
};

export default HMACGenerator;
