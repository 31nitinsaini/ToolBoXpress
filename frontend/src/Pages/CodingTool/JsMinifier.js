import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { minify } from 'terser';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const JsMinifier = () => {
  const [jsCode, setJsCode] = useState('function helloWorld() { console.log("Hello, World!"); }');
  const [minifiedJs, setMinifiedJs] = useState('');
  const [error, setError] = useState('');

  const minifyJs = async () => {
    try {
      const minifiedResult = await minify(jsCode);
      if (minifiedResult.error) {
        throw minifiedResult.error;
      }
      setMinifiedJs(minifiedResult.code);
      setError('');
    } catch (error) {
      console.error('Error minifying JavaScript:', error.message);
      setError(`Error: ${error.message}`);
    }
  };

  const handleJsChange = (e) => {
    setJsCode(e.target.value);
    setMinifiedJs(''); // Reset minified code when input changes
    setError('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(minifiedJs);
  };

  const handleClear = () => {
    setJsCode('');
    setMinifiedJs('');
    setError('');
  };
  const currentUrl = window.location.href;

  return (
    <>
     <Helmet>
      <title>ToolboXpress - JavaScript Minifier</title>
      <meta name="description" content="Minify your JavaScript code quickly and efficiently with ToolboXpress JavaScript Minifier. Reduce file sizes for faster web page loading. Fast, easy, and free!" />
      <meta name="keywords" content="JavaScript minifier, minify JavaScript, reduce file size, web development, optimization, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - JavaScript Minifier" />
      <meta property="og:description" content="Minify your JavaScript code quickly and efficiently with ToolboXpress JavaScript Minifier. Reduce file sizes for faster web page loading. Fast, easy, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - JavaScript Minifier" />
      <meta name="twitter:description" content="Minify your JavaScript code quickly and efficiently with ToolboXpress JavaScript Minifier. Reduce file sizes for faster web page loading. Fast, easy, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2>JavaScript Minifier</h2>
            <textarea
              rows={10}
              value={jsCode}
              onChange={handleJsChange}
              placeholder='function helloWorld() { console.log("Hello, World!"); }'
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <h3>Minified JavaScript:</h3>
            <div className="border p-3">
              <pre>{minifiedJs}</pre>
            </div>
          </div>
        </div>
        <div className="mb-3 mt-3">
          <button className="btn btn-primary mr-2" onClick={minifyJs}>
            Minify JavaScript
          </button>
          <button className="btn btn-success mr-2" onClick={handleCopy}>
            Copy
          </button>
          <button className="btn btn-danger" onClick={handleClear}>
            Clear
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

export default JsMinifier;
