import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

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

  return (
    <>
      <Header />
      <main>
        <div className="container mt-5">
          <h2>JSON Formatter</h2>
          <div className="form-group">
            <label htmlFor="jsonData">Enter JSON Data:</label>
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
      <Footer />
    </>
  );
};

export default JsonFormatter;
