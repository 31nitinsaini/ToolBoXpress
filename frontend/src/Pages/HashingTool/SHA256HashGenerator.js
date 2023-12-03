import React, { useState } from 'react';
import { createHash } from 'crypto-browserify';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const SHA256HashGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [sha256Hash, setSHA256Hash] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const generateSHA256Hash = () => {
        const hash = createHash('sha256').update(inputText).digest('hex');
        setSHA256Hash(hash);
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2>SHA-256 Hash Generator</h2>
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
                    <button className="btn btn-primary" onClick={generateSHA256Hash}>Generate SHA-256 Hash</button>
                    {sha256Hash && (
                        <div className="mt-4">
                            <h3>SHA-256 Hash:</h3>
                            <p>{sha256Hash}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>

    );
};

export default SHA256HashGenerator;
