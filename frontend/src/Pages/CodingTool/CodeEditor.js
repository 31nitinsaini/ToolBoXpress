import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Button, AppBar, Toolbar, IconButton, Typography, Paper, Tabs, Tab } from '@mui/material';
import { PlayArrow, Brightness4, Brightness7 } from '@mui/icons-material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const CodeEditor = () => {
  const [jsCode, setJsCode] = useState('// Write your JavaScript code here');
  const [htmlCode, setHtmlCode] = useState('<div>Hello, World!</div>');
  const [cssCode, setCssCode] = useState('/* Add your CSS styles here */');
  const [theme, setTheme] = useState('vs-dark');
  const [selectedTab, setSelectedTab] = useState(0);

  const handleJsCodeChange = (newCode, event) => {
    setJsCode(newCode);
  };

  const handleHtmlCodeChange = (newCode, event) => {
    setHtmlCode(newCode);
  };

  const handleCssCodeChange = (newCode, event) => {
    setCssCode(newCode);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'vs-dark' ? 'light' : 'vs-dark'));
  };

  const runCode = () => {
    try {
      const iframe = document.getElementById('previewFrame');
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Construct the full HTML document using user input
      const fullHtml = `
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `;

      iframeDoc.open();
      iframeDoc.write(fullHtml);
      iframeDoc.close();
    } catch (error) {
      console.error('Error running code:', error);
    }
  };

  const editorOptions = {
    fontSize: 16,
    automaticLayout: true,
    lineNumbers: 'on',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    renderIndentGuides: true,
    contextmenu: false,
  };

  return (
    <>
      <Header />
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton onClick={toggleTheme} color="inherit">
            {theme === 'vs-dark' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          <IconButton onClick={runCode} color="inherit">
            <PlayArrow />
          </IconButton>
          <Typography variant="h6">Code Editor</Typography>
        </Toolbar>
        <Tabs
          value={selectedTab}
          onChange={(event, newValue) => setSelectedTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="JavaScript" />
          <Tab label="HTML" />
          <Tab label="CSS" />
        </Tabs>
      </AppBar>
      <div style={{ padding: '20px' }}>
        {selectedTab === 0 && (
          <Paper elevation={3}>
            <MonacoEditor
              width="100%"
              height="400"
              language="javascript"
              theme={theme}
              value={jsCode}
              options={editorOptions}
              onChange={handleJsCodeChange}
            />
          </Paper>
        )}
        {selectedTab === 1 && (
          <Paper elevation={3}>
            <MonacoEditor
              width="100%"
              height="400"
              language="html"
              theme={theme}
              value={htmlCode}
              options={editorOptions}
              onChange={handleHtmlCodeChange}
            />
          </Paper>
        )}
        {selectedTab === 2 && (
          <Paper elevation={3}>
            <MonacoEditor
              width="100%"
              height="400"
              language="css"
              theme={theme}
              value={cssCode}
              options={editorOptions}
              onChange={handleCssCodeChange}
            />
          </Paper>
        )}
      </div>
      <div style={{ padding: '20px' }}>
        <h3>Preview</h3>
        <iframe id="previewFrame" title="Preview" width="100%" height="400" style={{ border: 'none' }} />
      </div>
      <Footer />
    </>
  );
};

export default CodeEditor;
