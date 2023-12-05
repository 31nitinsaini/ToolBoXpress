import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const JsonFormatter = () => {
  const [jsonData, setJsonData] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState(null);

  const handleFormatJson = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const formattedData = JSON.stringify(parsedData, null, 2);
      setFormattedJson(formattedData);
      setError(null);
    } catch (err) {
      setError('Invalid JSON format. Please check your input.');
    }
  };

  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>ToolBoXpress - JSON Formatter</title>
        <meta
          name="description"
          content="Format and beautify your JSON data with ToolBoXpress JSON Formatter. Ensure clean and readable JSON for improved data handling. Fast, easy, and free!"
        />
        <meta
          name="keywords"
          content="JSON formatter, format JSON data, beautify JSON, data handling, ToolBoXpress"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="ToolBoXpress - JSON Formatter" />
        <meta
          property="og:description"
          content="Format and beautify your JSON data with ToolBoXpress JSON Formatter. Ensure clean and readable JSON for improved data handling. Fast, easy, and free!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToolBoXpress - JSON Formatter" />
        <meta
          name="twitter:description"
          content="Format and beautify your JSON data with ToolBoXpress JSON Formatter. Ensure clean and readable JSON for improved data handling. Fast, easy, and free!"
        />

        {/* Canonical URL to specify the preferred version of a page */}
        <link rel="canonical" href={currentUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Header />

      <main>
        <div className="container my-5">
         <center>
         <h2>JSON Formatter</h2>
          <p>
            Format and beautify your JSON data with ToolBoXpress JSON Formatter. Ensure clean and readable JSON for
            improved data handling. Fast, easy, and free!
          </p>

         </center>
          <div className="form-group">
            <label htmlFor="jsonData" className="mb-2">
              Enter JSON Data:
            </label>
            <textarea
              id="jsonData"
              className="form-control"
              rows="6"
              value={jsonData}
              onChange={(e) => setJsonData(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" onClick={handleFormatJson}>
            Format JSON
          </button>

          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}

          {formattedJson && (
            <div className="mt-3">
              <h3>Formatted JSON:</h3>
              <div className="border p-3">
                <pre>{formattedJson}</pre>
              </div>
            </div>
          )}
        </div>
      </main>

      <RatingComponent />
      <Footer />
    </>
  );
};

export default JsonFormatter;
