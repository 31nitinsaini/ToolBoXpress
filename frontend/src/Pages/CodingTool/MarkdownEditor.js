import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const MarkdownEditor = () => {
  const [markdownContent, setMarkdownContent] = useState(`# Markdown Example

## Text Formatting

**Bold Text** and _Italic Text_ can be formatted easily.

### Lists

1. Ordered List Item 1
2. Ordered List Item 2
   - Unordered Sublist Item 1
   - Unordered Sublist Item 2
3. Ordered List Item 3

- Unordered List Item 1
- Unordered List Item 2
  - Sublist Item 1
  - Sublist Item 2
- Unordered List Item 3

### Links

[Use ToolboXpress](https://toolboxpress.vercel.app/) your online utility Store.

### Images

![React Logo](https://reactjs.org/logo-og.png)

### Code

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
\`\`\`
`);

  const handleMarkdownChange = (e) => {
    setMarkdownContent(e.target.value);
  };

  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>ToolBoXpress - Markdown Editor</title>
        <meta
          name="description"
          content="Create and edit Markdown content easily with ToolBoXpress Markdown Editor. Write and format your documents with a simple and intuitive interface. Fast, easy, and free!"
        />
        <meta
          name="keywords"
          content="Markdown editor, Markdown, document editor, text formatting, ToolboXpress"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="ToolBoXpress - Markdown Editor" />
        <meta
          property="og:description"
          content="Create and edit Markdown content easily with ToolBoXpress Markdown Editor. Write and format your documents with a simple and intuitive interface. Fast, easy, and free!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToolBoXpress - Markdown Editor" />
        <meta
          name="twitter:description"
          content="Create and edit Markdown content easily with ToolBoXpress Markdown Editor. Write and format your documents with a simple and intuitive interface. Fast, easy, and free!"
        />

        {/* Canonical URL to specify the preferred version of a page */}
        <link rel="canonical" href={currentUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Header />
      <style
        dangerouslySetInnerHTML={{
          __html: '.markdown-preview img { max-width: 100%; height: auto; }',
        }}
      />

      <main>
      <div className="container-fluid my-5">
        <center>  <h2>Markdown Editor</h2>
            <p>
              Create and edit Markdown content easily with ToolBoXpress Markdown Editor. Write and format your documents
              with a simple and intuitive interface. Fast, easy, and free!
            </p></center>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <textarea
              rows={40}
              value={markdownContent}
              onChange={handleMarkdownChange}
              placeholder="# Markdown Example"
              style={{ width: '100%', minHeight: '200px' }}
            />
          </div>
          <div className="col-md-6">
            <h3>Preview:</h3>
            <div
              className="container markdown-preview"
              style={{ border: '1px solid #ddd', padding: '10px', minHeight: '200px' }}
            >
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default MarkdownEditor;
