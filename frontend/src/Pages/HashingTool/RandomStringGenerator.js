import React, { useState } from 'react';
import { randomBytes } from 'crypto';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const RandomStringGenerator = () => {
    const [stringLength, setStringLength] = useState(16);
    const [generatedString, setGeneratedString] = useState('');

    const handleLengthChange = (e) => {
        setStringLength(parseInt(e.target.value, 10));
    };

    const generateRandomString = () => {
        const bytes = randomBytes(Math.ceil(stringLength / 2));
        const hexString = bytes.toString('hex').slice(0, stringLength);
        setGeneratedString(hexString);
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2 className="mb-4">Random String Generator</h2>
                    <div className="mb-3">
                        <label htmlFor="stringLength" className="form-label">String Length:</label>
                        <input
                            type="number"
                            id="stringLength"
                            className="form-control"
                            value={stringLength}
                            onChange={handleLengthChange}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={generateRandomString}>Generate Random String</button>
                    {generatedString && (
                        <div className="mt-4">
                            <h3>Generated String:</h3>
                            <p>{generatedString}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>
    );
};

export default RandomStringGenerator;
