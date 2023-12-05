import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { format } from 'sql-formatter';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

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

  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>ToolBoXpress - SQL Editor</title>
        <meta
          name="description"
          content="Write and execute SQL queries with ease using ToolBoXpress SQL Editor. Simplify database management and optimize your SQL workflow. Fast, easy, and free!"
        />
        <meta
          name="keywords"
          content="SQL editor, SQL queries, database management, SQL optimization, ToolboXpress"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="ToolBoXpress - SQL Editor" />
        <meta
          property="og:description"
          content="Write and execute SQL queries with ease using ToolboXpress SQL Editor. Simplify database management and optimize your SQL workflow. Fast, easy, and free!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToolBoXpress - SQL Editor" />
        <meta
          name="twitter:description"
          content="Write and execute SQL queries with ease using ToolboXpress SQL Editor. Simplify database management and optimize your SQL workflow. Fast, easy, and free!"
        />

        {/* Canonical URL to specify the preferred version of a page */}
        <link rel="canonical" href={currentUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Header />
      <main >
        <div className="container my-5">
        <center><h2>SQL Formatter</h2>
        <p>
          Write and execute SQL queries with ease using ToolBoXpress SQL Editor. Simplify database management and optimize your SQL workflow. Fast, easy, and free!
        </p></center>
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
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default SqlEditor;
