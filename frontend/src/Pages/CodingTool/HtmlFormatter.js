import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';

const HtmlFormatter = () => {
  const [htmlCode, setHtmlCode] = useState('<div><p>Hello, World!</p></div>');
  const [formattedHtml, setFormattedHtml] = useState('');
  const [error, setError] = useState('');

  const formatHtml = async () => {
    try {
      const formattedResult = await prettier.format(htmlCode, {
        parser: 'html',
        plugins: [parserHtml],
      });
      setFormattedHtml(formattedResult);
      setError('');
    } catch (error) {
      console.error('Error formatting HTML:', error.message);
      setError(`Error: ${error.message}`);
    }
  };

  const handleHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2>HTML Formatter</h2>
            <textarea
              rows={10}
              value={htmlCode}
              onChange={handleHtmlChange}
              placeholder="<div><p>Hello, World!</p></div>"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <h3>Formatted HTML:</h3>
            <div className="border p-3">
              <pre>{formattedHtml}</pre>
            </div>
          </div>
        </div>
        <div className="mb-3 mt-3">
          <button className="btn btn-primary mr-2" onClick={formatHtml}>
            Format HTML
          </button>
        </div>
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HtmlFormatter;