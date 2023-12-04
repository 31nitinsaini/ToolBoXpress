import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const SHA256HashGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [sha256Hash, setSHA256Hash] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const generateSHA256Hash = async () => {
        if (!inputText) {
            alert('Please enter text to hash.');
            return;
        }

        try {
            const encoder = new TextEncoder();
            const data = encoder.encode(inputText);
            const buffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(buffer));
            const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
            setSHA256Hash(hashHex);
        } catch (error) {
            console.error('Error generating SHA-256 hash:', error);
        }
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
