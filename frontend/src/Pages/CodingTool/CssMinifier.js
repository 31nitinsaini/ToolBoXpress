import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { minify } from 'csso';

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

  return (
    <>
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
      <Footer />
    </>
  );
};

export default CssMinifier;
