import React, { useState } from 'react';
import { Container, Typography, TextareaAutosize, Button, Card, CardContent, Grid } from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';
const TextEncrypt = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleEncrypt = () => {
       try {
        const encryptedText=btoa(inputText)
        setOutputText(encryptedText);
       } catch (error) {
         alert("Encryption failed. Please check your input text.")
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
      <title>ToolboXpress - Text Encryption Tool</title>
      <meta name="description" content="Encrypt your text with ToolboXpress Text Encryption Tool. Encode messages for secure communication. Fast, intuitive, and free!" />
      <meta name="keywords" content="Text encryption tool, encrypt text, encode messages, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Text Encryption Tool" />
      <meta property="og:description" content="Encrypt your text with ToolboXpress Text Encryption Tool. Encode messages for secure communication. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Text Encryption Tool" />
      <meta name="twitter:description" content="Encrypt your text with ToolboXpress Text Encryption Tool. Encode messages for secure communication. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>

            <Header />
            <main>
                <Container maxWidth="md">
                    <Typography variant="h4" align="center" gutterBottom>
                        Encrypt Text
                    </Typography>
                    {/* Description Section */}
<div style={{ marginBottom: '20px' }}>
    <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>
        Encrypt your sensitive text with ToolboXpress Text Encryption Tool.
        Protect your messages by converting them into a secure encoded format.
        Fast, intuitive, and free! Simply input your text, click the
        "Encrypt Text" button, and copy the encoded result for added security.
        Explore examples to understand how the encryption process works.
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
                                handleEncrypt={handleEncrypt}
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
    handleEncrypt,
    handleCopyToClipboard,
}) => {
    const isTextareaEmpty = inputText.trim() === '';

    return (
        <div>
            <div style={{
                width: '100%',
                height: '200px', // Set the desired height here
                borderRadius: '5px',
                border: '1px solid #ccc',
                overflowY: isTextareaEmpty ? 'hidden' : 'auto', // Hide scrollbar when empty
                padding: '10px',
                marginBottom: '20px'
            }}>
                <TextareaAutosize
                    rowsMin={5}
                    placeholder="Enter text here..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    style={{
                        width: '100%',
                        minHeight: '100%', // Make sure the textarea fills the container
                        border: 'none', // Remove border for the textarea
                        outline: 'none', // Remove outline
                        resize: 'none', // Disable resizing
                        background: 'transparent', // Make background transparent
                        overflowY: 'hidden', // Prevent further scrolling
                    }}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                style={{ padding: '10px 20px', borderRadius: '5px' }}
                onClick={handleEncrypt}
            >
                Encrypt Text
            </Button>
            {outputText && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Typography variant="h5">Result:</Typography>
                    <div style={{
                        width: '100%',
                        height: '200px', // Set the desired height here
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        overflowY: isTextareaEmpty ? 'hidden' : 'auto', // Hide scrollbar when empty
                        padding: '10px',
                        marginBottom: '20px'
                    }}>
                        <TextareaAutosize
                            rowsMin={5}
                            value={outputText}
                            readOnly
                            style={{
                                width: '100%',
                                minHeight: '100%', // Make sure the textarea fills the container
                                border: 'none', // Remove border for the textarea
                                outline: 'none', // Remove outline
                                resize: 'none', // Disable resizing
                                background: 'transparent', // Make background transparent
                                overflowY: 'hidden', // Prevent further scrolling
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
            input: 'Hello World',
           
        },
        {
            input: 'This is an example',
            
        },
        {
            input: 'Encrypt this text',
           
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
                        <Typography variant="body1">{btoa(example.input)}</Typography>
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

export default TextEncrypt;
