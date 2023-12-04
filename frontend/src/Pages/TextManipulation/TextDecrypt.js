import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextareaAutosize,
  Button,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const TextDecrypt = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleDecrypt = () => {
    try {
        const decryptedText=atob(inputText)
        setOutputText(decryptedText);
    } catch (error) {
        alert("Decryption failed. Please check your input text.")
    }
  };

  const handleCopyToClipboard = async () => {
    try {
        if (outputText) {
            await navigator.clipboard.writeText(outputText);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        }
    } catch (error) {
        console.error('Error copying to clipboard:', error);
        // Handle the error as needed
    }
};

  const setInputTextExample = (exampleText) => {
    setInputText(exampleText);
  };

  const currentUrl = window.location.href;

  return (
    <>
       <Helmet>
      <title>ToolboXpress - Text Decryption Tool</title>
      <meta name="description" content="Decrypt encoded text with ToolboXpress Text Decryption Tool. Decode encrypted messages and reveal the original content. Fast, intuitive, and free!" />
      <meta name="keywords" content="Text decryption tool, decrypt text, decode messages, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Text Decryption Tool" />
      <meta property="og:description" content="Decrypt encoded text with ToolboXpress Text Decryption Tool. Decode encrypted messages and reveal the original content. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Text Decryption Tool" />
      <meta name="twitter:description" content="Decrypt encoded text with ToolboXpress Text Decryption Tool. Decode encrypted messages and reveal the original content. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>

      <Header />
      <main>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Decrypt Text
          </Typography>
          {/* Description Section */}
<div style={{ marginBottom: '20px' }}>
    <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>
        Decrypt encoded text with ToolboXpress Text Decryption Tool.
        Decode encrypted messages and reveal the original content.
        Fast, intuitive, and free! Enter your encrypted text, click the
        "Decrypt Text" button, and copy the result. Explore examples to
        understand how the decryption works.
    </p>
</div>

          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <ToolArea
                inputText={inputText}
                setInputText={setInputText}
                outputText={outputText}
                setOutputText={setOutputText}
                isCopied={isCopied}
                setIsCopied={setIsCopied}
                handleDecrypt={handleDecrypt}
                handleCopyToClipboard={handleCopyToClipboard}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <ExampleArea setInputTextExample={setInputTextExample} />
            </Grid>
          </Grid>
        </Container>
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

const ToolArea = ({
  inputText,
  setInputText,
  outputText,
  setOutputText,
  isCopied,
  setIsCopied,
  handleDecrypt,
  handleCopyToClipboard,
}) => {
  const isTextareaEmpty = inputText.trim() === '';

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          overflowY: isTextareaEmpty ? 'hidden' : 'auto',
          padding: '10px',
          marginBottom: '20px',
        }}
      >
        <TextareaAutosize
          rowsMin={5}
          placeholder="Enter encrypted text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            width: '100%',
            minHeight: '100%',
            border: 'none',
            outline: 'none',
            resize: 'none',
            background: 'transparent',
          }}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ padding: '10px 20px', borderRadius: '5px' }}
        onClick={handleDecrypt}
      >
        Decrypt Text
      </Button>
      {outputText && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="h5">Result:</Typography>
          <div
            style={{
              width: '100%',
              height: '200px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              overflowY: isTextareaEmpty ? 'hidden' : 'auto',
              padding: '10px',
              marginBottom: '20px',
            }}
          >
            <TextareaAutosize
              rowsMin={5}
              value={outputText}
              readOnly
              style={{
                width: '100%',
                minHeight: '100%',
                border: 'none',
                outline: 'none',
                resize: 'none',
                background: 'transparent',
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px' }}
            onClick={handleCopyToClipboard}
            disabled={isCopied}
          >
            {isCopied ? 'Copied!' : 'Copy to Clipboard'}
          </Button>
        </div>
      )}
    </div>
  );
};

const ExampleArea = ({ setInputTextExample }) => {
  const exampleTexts = [
    {
      input: 'SGVsbG8gV29ybGQ=',
      
    },
    {
      input: 'VGhpcyBpcyBhbiBleGFtcGxl',
    
    },
    {
      input: 'RW5jcnlwdCB0aGlzIHRleHQ=',
     
    },
  ];

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Example
      </Typography>
      {exampleTexts.map((example, index) => (
        <Card key={index} style={{ marginBottom: '16px', width: '100%' }}>
          <CardContent>
            <Typography variant="h6">Input:</Typography>
            <Typography variant="body1">{example.input}</Typography>
            <Typography variant="h6" style={{ marginTop: '16px' }}>Output:</Typography>
            <Typography variant="body1">{atob(example.input)}</Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px' }}
              onClick={() => setInputTextExample(example.input)}
            >
              Load Example
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TextDecrypt;