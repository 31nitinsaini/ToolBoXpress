import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const Base64Decoder = () => {
    const [encodedText, setEncodedText] = useState('');
    const [decodedText, setDecodedText] = useState('');

    const handleInputChange = (e) => {
        setEncodedText(e.target.value);
    };

    const decodeBase64 = () => {
        try {
            const decoded = atob(encodedText);
            setDecodedText(decoded);
        } catch (error) {
            console.error('Error decoding base64:', error.message);
            setDecodedText('Invalid base64 encoding');
        }
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2>Base64 Decoder</h2>
                    <div className="mb-3">
                        <label htmlFor="encodedText" className="form-label">Encoded Text (Base64):</label>
                        <textarea
                            id="encodedText"
                            className="form-control"
                            value={encodedText}
                            onChange={handleInputChange}
                            placeholder="Enter base64-encoded text"
                        />
                    </div>
                    <button className="btn btn-primary" onClick={decodeBase64}>Decode Base64</button>
                    {decodedText && (
                        <div className="mt-4">
                            <h3>Decoded Text:</h3>
                            <p>{decodedText}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>
    );
};

export default Base64Decoder;
