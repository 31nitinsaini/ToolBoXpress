import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

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

  return (
    <>
      <Header />
<style dangerouslySetInnerHTML={{__html: ".markdown-preview img {\n  max-width: 100%;\n  height: auto;\n}" }} />

      <div className="container-fluid  mt-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2>Markdown Editor</h2>
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
            <div className='container markdown-preview' style={{ border: '1px solid #ddd', padding: '10px', minHeight: '200px', }}>
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarkdownEditor;
