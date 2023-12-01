import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { format } from 'sql-formatter'; // Corrected import

const SqlEditor = () => {
  const [sqlQuery, setSqlQuery] = useState('');
  const [formattedQuery, setFormattedQuery] = useState('');
  const [error, setError] = useState('');

  const formatQuery = () => {
    try {
      const formattedResult = format(sqlQuery, { language: 'sql' });
      setFormattedQuery(formattedResult);
      setError('');
    } catch (error) {
      console.error('Error formatting SQL query:', error.message);
      setError(`Error: ${error.message}`);
    }
  };

  const clearEditor = () => {
    setSqlQuery('');
    setFormattedQuery('');
    setError('');
  };

  return (
    <>
      <Header />
      <main className="container mt-5">
        <h2>SQL Formatter</h2>
        <div className="form-group">
          <label htmlFor="sqlQuery">Enter SQL Query:</label>
          <textarea
            id="sqlQuery"
            className="form-control"
            rows="6"
            value={sqlQuery}
            onChange={(e) => setSqlQuery(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary mr-2" onClick={formatQuery}>
            Format Query
          </button>
          <button className="btn btn-secondary" onClick={clearEditor}>
            Clear Editor
          </button>
        </div>

        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        {formattedQuery && (
          <div className="mt-3">
            <h3>Formatted Query:</h3>
            <div className="border p-3">
              <pre>{formattedQuery}</pre>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SqlEditor;
