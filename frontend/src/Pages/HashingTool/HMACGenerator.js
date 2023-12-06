import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const hmacGenerator = async (key, message) => {
    const blocksize = 64; // Block size for SHA-256
    const ipad = 0x36;
    const opad = 0x5c;

    // If the key is longer than the block size, hash it
    if (key.length > blocksize) {
        key = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(key));
    }

    // Pad the key with zeros to the block size
    key = new Uint8Array([...key, ...Array(blocksize - key.length).fill(0)]);

    // XOR key with inner and outer pads
    const iKeyPad = key.map((byte) => byte ^ ipad);
    const oKeyPad = key.map((byte) => byte ^ opad);

    // Concatenate inner pad and message, then hash
    const innerHash = await window.crypto.subtle.digest('SHA-256', new Uint8Array([...iKeyPad, ...new TextEncoder().encode(message)]));

    // Concatenate outer pad and inner hash, then hash again
    const finalHash = await window.crypto.subtle.digest('SHA-256', new Uint8Array([...oKeyPad, ...new Uint8Array(innerHash)]));

    // Convert the final hash to a hex string
    return Array.from(new Uint8Array(finalHash), (byte) => byte.toString(16).padStart(2, '0')).join('');
};

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

    const generateHMAC = async () => {
        if (!inputText || !secretKey) {
            alert('Please enter input text and secret key.');
            return;
        }

        try {
            const hmac = await hmacGenerator(secretKey, inputText);
            setHMACResult(hmac);
        } catch (error) {
            console.error('Error generating HMAC:', error);
            // Handle the error, e.g., display an error message to the user
        }
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
