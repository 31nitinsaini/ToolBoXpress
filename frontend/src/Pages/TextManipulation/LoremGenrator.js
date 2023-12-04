import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextareaAutosize,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  CircularProgress,
} from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const LoremGenerator = () => {
  const [generatedText, setGeneratedText] = useState('');
  const [textLength, setTextLength] = useState(200);
  const [isLoading, setIsLoading] = useState(false);
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

  const generateLoremIpsum = () => {
    const paragraphs = Math.ceil(textLength / 1000);
    setIsLoading(true);

    axios({
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}`,
      headers: {
        'X-Api-Key': 'G4jaPIE2PQBGdVPHAL4P7g==JfmYzU3EmtqzEMG2',
      },
    })
      .then((response) => {
        setGeneratedText(response.data.text);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
        setCopyStatus(''); // Clear copy status
      });
  };

  const clearGeneratedText = () => {
    setGeneratedText('');
  };

  const handleCopyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = generatedText;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');

    document.body.removeChild(textArea);

    setCopyStatus('copied'); // Set copy status to 'copied' when text is copied
  };

  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
      <title>ToolboXpress - Lorem Ipsum Generator</title>
      <meta name="description" content="Generate placeholder text with ToolboXpress Lorem Ipsum Generator. Create dummy text for your design projects. Fast, easy, and free!" />
      <meta name="keywords" content="Lorem Ipsum generator, placeholder text, dummy text, design projects, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Lorem Ipsum Generator" />
      <meta property="og:description" content="Generate placeholder text with ToolboXpress Lorem Ipsum Generator. Create dummy text for your design projects. Fast, easy, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Lorem Ipsum Generator" />
      <meta name="twitter:description" content="Generate placeholder text with ToolboXpress Lorem Ipsum Generator. Create dummy text for your design projects. Fast, easy, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>

      <Header />
      <main>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Lorem Ipsum Generator
          </Typography>
          {/* Description Section */}
<div style={{ marginBottom: '20px' }}>
    <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>
        Generate placeholder text with ToolboXpress Lorem Ipsum Generator.
        Create dummy text for your design projects. Fast, easy, and free!
        Customize the text length, click "Generate Lorem Ipsum," and copy the result for your use.
    </p>
</div>

          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div>
                <TextField
                  label="Text Length"
                  type="number"
                  fullWidth
                  value={textLength}
                  onChange={(e) => setTextLength(e.target.value)}
                  style={{ marginBottom: '10px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    marginRight: '10px',
                    backgroundColor: isLoading ? '#ccc' : '', // Gray background when loading
                  }}
                  onClick={isLoading ? null : generateLoremIpsum}
                >
                  {isLoading ? (
                    <CircularProgress size={24} color="primary" /> // Blue loading circle
                  ) : (
                    'Generate Lorem Ipsum'
                  )}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    marginRight: '10px',
                  }}
                  onClick={clearGeneratedText}
                >
                  Clear
                </Button>
              </div>
              {generatedText && (
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    overflowY: 'auto',
                    padding: '10px',
                    marginBottom: '20px',
                  }}
                >
                  <TextareaAutosize
                    rowsMin={5}
                    value={generatedText}
                    style={{
                      width: '100%',
                      minHeight: '100%',
                      border: 'none',
                      outline: 'none',
                      resize: 'none',
                      background: 'transparent',
                    }}
                  />
                  {copyStatus === 'copied' && (
                    <Typography variant="caption" color="primary">
                      Copied!
                    </Typography>
                  )}
                </div>
              )}
              {generatedText && (
                <div style={{ textAlign: 'center' }}>
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
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default LoremGenerator;
  