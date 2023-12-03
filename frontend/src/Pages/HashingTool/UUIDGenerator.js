import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const UUIDGenerator = () => {
    const [generatedUUID, setGeneratedUUID] = useState('');

    const generateUUID = () => {
        const newUUID = uuidv4();
        setGeneratedUUID(newUUID);
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2 className="mb-4">UUID Generator</h2>
                    <button className="btn btn-primary" onClick={generateUUID}>Generate UUID</button>
                    {generatedUUID && (
                        <div className="mt-4">
                            <h3>Generated UUID:</h3>
                            <p>{generatedUUID}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>
    );
};

export default UUIDGenerator;