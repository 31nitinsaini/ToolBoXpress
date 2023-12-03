import React, { useState } from 'react';
import { createHash } from 'crypto-browserify';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const SHA512HashGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [sha512Hash, setSHA512Hash] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const generateSHA512Hash = () => {
        const hash = createHash('sha512').update(inputText).digest('hex');
        setSHA512Hash(hash);
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2>SHA-512 Hash Generator</h2>
                    <div className="mb-3">
                        <label htmlFor="inputText" className="form-label">Input Text:</label>
                        <input
                            type="text"
                            id="inputText"
                            className="form-control"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Enter text to hash"
                        />
                    </div>
                    <button className="btn btn-primary" onClick={generateSHA512Hash}>Generate SHA-512 Hash</button>
                    {sha512Hash && (
                        <div className="mt-4">
                            <h3>SHA-512 Hash:</h3>
                            <p>{sha512Hash}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer /></>
    );
};

export default SHA512HashGenerator;
