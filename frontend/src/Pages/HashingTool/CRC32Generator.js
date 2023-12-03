import React, { useState } from 'react';
import crc32 from 'crc32';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const CRC32Generator = () => {
    const [inputText, setInputText] = useState('');
    const [generatedCRC32, setGeneratedCRC32] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const generateCRC32 = () => {
        const crc32Value = crc32(inputText); // Use crc32 directly on inputText
        setGeneratedCRC32(crc32Value.toString(16)); // Convert to a hexadecimal string
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2 className="mb-4">CRC32 Generator</h2>
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
                    <button className="btn btn-primary" onClick={generateCRC32}>Generate CRC32</button>
                    {generatedCRC32 && (
                        <div className="mt-4">
                            <h3>Generated CRC32:</h3>
                            <p>{generatedCRC32}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>
    );
};

export default CRC32Generator;
