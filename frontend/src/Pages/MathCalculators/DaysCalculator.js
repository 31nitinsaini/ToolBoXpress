import React, { useState } from 'react';
import './DaysCalculator.css'; // Import your CSS file
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

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
  
  const currentUrl = window.location.href;
  return (
   <>
    <Helmet>
      <title>ToolboXpress - Days Calculator</title>
      <meta name="description" content="Calculate the number of days between two dates with ToolboXpress Days Calculator. Plan events, track durations, and more. Fast, intuitive, and free!" />
      <meta name="keywords" content="Days calculator, date calculator, calculate duration, date difference, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Days Calculator" />
      <meta property="og:description" content="Calculate the number of days between two dates with ToolboXpress Days Calculator. Plan events, track durations, and more. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Days Calculator" />
      <meta name="twitter:description" content="Calculate the number of days between two dates with ToolboXpress Days Calculator. Plan events, track durations, and more. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
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
    <RatingComponent/>
   <Footer/>
   </>
  );
};

export default DaysCalculator;
