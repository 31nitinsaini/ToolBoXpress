import React, { useState } from 'react';
import { hash, genSalt } from 'bcryptjs';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const SaltedHashGenerator = () => {
    const [inputPassword, setInputPassword] = useState('');
    const [saltRounds, setSaltRounds] = useState(10);
    const [salt, setSalt] = useState('');
    const [saltedHash, setSaltedHash] = useState('');

    const handlePasswordChange = (e) => {
        setInputPassword(e.target.value);
    };

    const handleSaltRoundsChange = (e) => {
        setSaltRounds(parseInt(e.target.value, 10));
    };

    const generateSaltedHash = async () => {
        if (!inputPassword) {
            alert('Please enter a password.');
            return;
        }

        try {
            const generatedSalt = await genSalt(saltRounds);
            const hashedPassword = await hash(inputPassword, generatedSalt);

            setSalt(generatedSalt);
            setSaltedHash(hashedPassword);
        } catch (error) {
            console.error('Error generating salted hash:', error);
        }
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2 className="mb-4">Salted Hash Generator</h2>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password:</label>
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            value={inputPassword}
                            onChange={handlePasswordChange}
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="saltRounds" className="form-label">Salt Rounds:</label>
                        <input
                            type="number"
                            id="saltRounds"
                            className="form-control"
                            value={saltRounds}
                            onChange={handleSaltRoundsChange}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={generateSaltedHash}>Generate Salted Hash</button>
                    {salt && saltedHash && (
                        <div className="mt-4">
                            <h3>Salt:</h3>
                            <p>{salt}</p>
                            <h3>Salted Hash:</h3>
                            <p>{saltedHash}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>
    );
};

export default SaltedHashGenerator;
