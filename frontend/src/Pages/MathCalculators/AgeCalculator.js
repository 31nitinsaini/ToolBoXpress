import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const AgeCalculator = () => {
  const [age, setAge] = useState(0);
  const [result, setResult] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let ageNow = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
      ageNow--;
    }
    return ageNow;
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    const calculatedAge = calculateAge(newDate);
    setAge(calculatedAge);
    setResult(null); // Reset result when the date changes
  };

  const handleShowResult = () => {
    const birthDate = document.getElementById('date_of_birth').value;
    const birthDateObj = new Date(birthDate);
    const today = new Date();

    const diff = today - birthDateObj;
    const ageInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    const ageInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const ageInHours = Math.floor(diff / (1000 * 60 * 60));

    setResult({
      years: age,
      months: ageInMonths,
      days: ageInDays,
      hours: ageInHours,
    });
  };

  return (
    <>
      <Header />
      <main style={{ textAlign: 'center', marginTop: '20px' }}>
        <label htmlFor="date_of_birth">Select your date of birth:</label>
        <input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          defaultValue="1990-01-01"
          onChange={handleDateChange}
          style={{ marginBottom: '10px' }}
        />
        <br />
        <button
          onClick={handleShowResult}
          style={{ marginBottom: '10px', padding: '10px 20px', fontSize: '1rem' }}
        >
          Show Age Details
        </button>
        {result && (
          <div className="result-container" style={{ marginTop: '20px' }}>
            <p>Your age is {result.years} years</p>
            <p>Your age is approximately {result.months} months</p>
            <p>Your age is approximately {result.days} days</p>
            <p>Your age is approximately {result.hours} hours</p>
          </div>
        )}
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default AgeCalculator;
