import React, { useState } from 'react';
import md5 from 'md5'; // Import the md5 library
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const MD5HashGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [md5Hash, setMD5Hash] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const generateMD5Hash = () => {
        const hash = md5(inputText);
        setMD5Hash(hash);
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2>MD5 Hash Generator</h2>
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
                    <button className="btn btn-primary" onClick={generateMD5Hash}>Generate MD5 Hash</button>
                    {md5Hash && (
                        <div className="mt-4">
                            <h3>MD5 Hash:</h3>
                            <p>{md5Hash}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>

    );
};

export default MD5HashGenerator;
