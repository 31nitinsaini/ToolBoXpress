import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

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
  const currentUrl = window.location.href;

  return (
    <>
     <Helmet>
      <title>ToolboXpress - HTML Formatter</title>
      <meta name="description" content="Format and beautify your HTML code effortlessly with ToolboXpress HTML Formatter. Ensure clean and readable HTML for improved code quality. Fast, easy, and free!" />
      <meta name="keywords" content="HTML formatter, format HTML code, beautify HTML, web development, code quality, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - HTML Formatter" />
      <meta property="og:description" content="Format and beautify your HTML code effortlessly with ToolboXpress HTML Formatter. Ensure clean and readable HTML for improved code quality. Fast, easy, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - HTML Formatter" />
      <meta name="twitter:description" content="Format and beautify your HTML code effortlessly with ToolboXpress HTML Formatter. Ensure clean and readable HTML for improved code quality. Fast, easy, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
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
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default HtmlFormatter;