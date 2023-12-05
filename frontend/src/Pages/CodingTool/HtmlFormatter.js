import React, { useState,useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Helmet } from 'react-helmet';
import prettifyHtml from 'prettify-html';
import RatingComponent from '../../Components/RatingComponent';
import {

  Button,

} from '@mui/material';
const HtmlFormatter = () => {
  const [htmlCode, setHtmlCode] = useState('<div><p>Hello, World!</p></div>');
  const [formattedHtml, setFormattedHtml] = useState('');
  const [error, setError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    if (copyStatus === 'copied') {
      // Reset copy status after 2 seconds
      const timeout = setTimeout(() => {
        setCopyStatus('');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [copyStatus]);
  const handleCopyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = formattedHtml;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');

    document.body.removeChild(textArea);

    setCopyStatus('copied'); // Set copy status to 'copied' when text is copied
  };
  const formatHtml = () => {
    try {
      const formatted = prettifyHtml(htmlCode, { indent: 2 });
      setFormattedHtml(formatted);
      setError('');
    } catch (error) {
      console.error('Error formatting HTML:', error);
      setError('Error formatting HTML');
    }
  };

  const handleHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  };
  const currentUrl = window.location.href;


  return (
    <>
      <Helmet>
        <title>ToolBoXpress - HTML Formatter</title>
        <meta
          name="description"
          content="Format and beautify your HTML code effortlessly with ToolBoXpress HTML Formatter. Ensure clean and readable HTML for improved code quality. Fast, easy, and free!"
        />
        <meta
          name="keywords"
          content="HTML formatter, format HTML code, beautify HTML, web development, code quality, ToolBoXpress"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="ToolBoXpress - HTML Formatter" />
        <meta
          property="og:description"
          content="Format and beautify your HTML code effortlessly with ToolBoXpress HTML Formatter. Ensure clean and readable HTML for improved code quality. Fast, easy, and free!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToolBoXpress - HTML Formatter" />
        <meta
          name="twitter:description"
          content="Format and beautify your HTML code effortlessly with ToolBoXpress HTML Formatter. Ensure clean and readable HTML for improved code quality. Fast, easy, and free!"
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
        <h2>HTML Formatter</h2>
            <p>
              Format and beautify your HTML code effortlessly with ToolBoXpress HTML Formatter. Ensure clean and readable
              HTML for improved code quality. Fast, easy, and free!
            </p>
        </center>
        <div className="row mt-5">
          <div className="col-md-6 mb-4 mb-md-0">
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
            {formattedHtml&&<div style={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      padding: '10px 20px',
                      borderRadius: '5px',
                      marginTop: '10px',
                    }}
                    onClick={handleCopyToClipboard}
                  >
                    {copyStatus === 'copied' ? 'Copied' : 'Copy to Clipboard'}
                  </Button></div>}
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
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default HtmlFormatter;
