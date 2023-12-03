import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const Base64Encoder = () => {
    const [inputText, setInputText] = useState('');
    const [encodedText, setEncodedText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const encodeToBase64 = () => {
        const encoded = btoa(inputText);
        setEncodedText(encoded);
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <div className="mb-5">
                        <h2>Base64 Encoder</h2>
                        <div className="mb-3">
                            <label htmlFor="inputText" className="form-label">Input Text:</label>
                            <textarea
                                id="inputText"
                                className="form-control"
                                value={inputText}
                                onChange={handleInputChange}
                                placeholder="Enter text to encode"
                            />
                        </div>
                        <button className="btn btn-primary" onClick={encodeToBase64}>Encode to Base64</button>
                        {encodedText && (
                            <div className="mt-4">
                                <h3>Encoded Text (Base64):</h3>
                                <p>{encodedText}</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>
    );
};

export default Base64Encoder;
