import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const CodeSnippetGenerator = () => {
  const [language, setLanguage] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [generatedSnippet, setGeneratedSnippet] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Dynamically import ClipboardJS
    import('clipboard').then((ClipboardJS) => {
      const clipboard = new ClipboardJS.default('.btn-copy');

      clipboard.on('success', () => {
        setCopied(true);
      });

      return () => {
        clipboard.destroy();
      };
    });
  }, []);

  const generateSnippet = () => {
    const snippet = `
/**
 * Language: ${language}
 * Description: ${description}
 */

${code}
`;

    setGeneratedSnippet(snippet);
    setCopied(false);
  };

  return (
    <>
      <Header />
      <main>
        <div className="container mt-5">
          <h2>Code Snippet Generator</h2>
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <input
              type="text"
              id="language"
              className="form-control"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="code">Code:</label>
            <textarea
              id="code"
              className="form-control"
              rows="6"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={generateSnippet}>
            Generate Snippet
          </button>

          {generatedSnippet && (
            <div className="mt-3">
              <h3>Generated Snippet:</h3>
              <div className="border p-3">
                <pre id="generatedSnippet">{generatedSnippet}</pre>
                <button
                  className="btn btn-secondary mt-3 btn-copy"
                  data-clipboard-target="#generatedSnippet"
                >
                  Copy to Clipboard
                </button>
                {copied && (
                  <span className="text-success ml-2">Copied!</span>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CodeSnippetGenerator;
