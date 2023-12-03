import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { minify } from 'csso';
import { Helmet } from 'react-helmet';

const CssMinifier = () => {
  const [cssCode, setCssCode] = useState('body { margin: 0; padding: 0; }');
  const [minifiedCss, setMinifiedCss] = useState('');
  const [error, setError] = useState('');

  const minifyCss = () => {
    try {
      const minifiedResult = minify(cssCode);
      setMinifiedCss(minifiedResult.css);
      setError('');
    } catch (error) {
      console.error('Error minifying CSS:', error.message);
      setError(`Error: ${error.message}`);
    }
  };

  const handleCssChange = (e) => {
    setCssCode(e.target.value);
    setMinifiedCss(''); // Reset minified code when input changes
    setError('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(minifiedCss);
  };

  const handleClear = () => {
    setCssCode('');
    setMinifiedCss('');
    setError('');
  };
  const currentUrl = window.location.href;
  return (
    <>
    <Helmet>
      <title>ToolboXpress - CSS Minifier</title>
      <meta name="description" content="Minify your CSS code quickly and efficiently with ToolboXpress CSS Minifier. Reduce file sizes for faster web page loading. Fast, easy, and free!" />
      <meta name="keywords" content="CSS minifier, minify CSS, reduce file size, web development, optimization, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - CSS Minifier" />
      <meta property="og:description" content="Minify your CSS code quickly and efficiently with ToolboXpress CSS Minifier. Reduce file sizes for faster web page loading. Fast, easy, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - CSS Minifier" />
      <meta name="twitter:description" content="Minify your CSS code quickly and efficiently with ToolboXpress CSS Minifier. Reduce file sizes for faster web page loading. Fast, easy, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>

      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2>CSS Minifier</h2>
            <textarea
              rows={10}
              value={cssCode}
              onChange={handleCssChange}
              placeholder="body { margin: 0; padding: 0; }"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <h3>Minified CSS:</h3>
            <div className="border p-3">
              <pre>{minifiedCss}</pre>
            </div>
          </div>
        </div>
        <div className="mb-3 mt-3">
          <button className="btn btn-primary mr-2" onClick={minifyCss}>
            Minify CSS
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

export default CssMinifier;
