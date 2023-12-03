import React, { useState } from 'react';
import { hash } from 'bcryptjs';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const BcryptGenerator = () => {
    const [inputPassword, setInputPassword] = useState('');
    const [saltRounds, setSaltRounds] = useState(10);
    const [bcryptHash, setBcryptHash] = useState('');

    const handlePasswordChange = (e) => {
        setInputPassword(e.target.value);
    };

    const handleSaltRoundsChange = (e) => {
        setSaltRounds(parseInt(e.target.value, 10));
    };

    const generateBcryptHash = async () => {
        if (!inputPassword) {
            alert('Please enter a password.');
            return;
        }

        try {
            const hashedPassword = await hash(inputPassword, saltRounds);
            setBcryptHash(hashedPassword);
        } catch (error) {
            console.error('Error generating bcrypt hash:', error);
            // Handle the error as needed, e.g., show an error message to the user.
        }
    };

    return (
        <>
            <Header />
            <main>
                <div className="container mt-5">
                    <h2 className="mb-4">Bcrypt Hash Generator</h2>
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
                    <button className="btn btn-primary" onClick={generateBcryptHash}>Generate Bcrypt Hash</button>
                    {bcryptHash && (
                        <div className="mt-4">
                            <h3>Bcrypt Hash:</h3>
                            <p>{bcryptHash}</p>
                        </div>
                    )}
                </div>
            </main>
            <RatingComponent />
            <Footer />
        </>
    );
};

export default BcryptGenerator;
