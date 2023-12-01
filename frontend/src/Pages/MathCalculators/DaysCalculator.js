import React, { useState } from 'react';
import './DaysCalculator.css'; // Import your CSS file
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const DaysCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [daysDifference, setDaysDifference] = useState(null);

  const calculateDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      alert('Please enter valid dates.');
      return;
    }

    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    setDaysDifference(differenceInDays);
  };

  const renderCountingDays = () => {
    return (
      <span className="counting-day">
        Total Days: {Math.round(daysDifference)}
      </span>
    );
  };
  

  return (
   <>
   <Header/>
   <div className="container mt-5">
      <h2>Days Calculator</h2>
      <div className="row">
        <div className="col-md-4">
          <label>Start Date:</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label>End Date:</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={calculateDays}>
            Calculate Days
          </button>
        </div>
      </div>
      {daysDifference !== null && (
        <div className="mt-3 counting-days-container">
          {renderCountingDays()}
        </div>
      )}
    </div>
   <Footer/>
   </>
  );
};

export default DaysCalculator;
