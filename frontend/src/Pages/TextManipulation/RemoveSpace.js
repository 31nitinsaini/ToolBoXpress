import React, { useState } from 'react';
import { Container, Typography, TextareaAutosize, Button, Card, CardContent, Grid } from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';
const RemoveSpace = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleConvert = () => {
        const convertedText = inputText.replace(/\s/g, ''); // Remove spaces
        setOutputText(convertedText);
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
      <title>ToolboXpress - Space Remover</title>
      <meta name="description" content="Remove extra spaces from text with ToolboXpress Space Remover. Clean up your text by eliminating unnecessary spaces. Fast, intuitive, and free!" />
      <meta name="keywords" content="Space remover, remove extra spaces, text cleaner, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Space Remover" />
      <meta property="og:description" content="Remove extra spaces from text with ToolboXpress Space Remover. Clean up your text by eliminating unnecessary spaces. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Space Remover" />
      <meta name="twitter:description" content="Remove extra spaces from text with ToolboXpress Space Remover. Clean up your text by eliminating unnecessary spaces. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
            <Header />
            <main>
                <Container maxWidth="md">
                    <Typography variant="h4" align="center" gutterBottom>
                        Remove Spaces
                    </Typography>
                    {/* Description Section */}
<div style={{ marginBottom: '20px' }}>
    <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>
        Clean up your text by eliminating unnecessary spaces with the ToolboXpress Remove Spaces tool.
        Simply paste your text, and watch as extra spaces are effortlessly removed, leaving you with streamlined content.
        Copy the modified text to your clipboard with ease. Fast, intuitive, and free!
    </p>
</div>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <ToolArea
                                inputText={inputText}
                                setInputText={setInputText}
                                outputText={outputText}
                                isCopied={isCopied}
                                handleConvert={handleConvert}
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
    isCopied,
    handleConvert,
    handleCopyToClipboard,
}) => {
    const [scrollDisabled, setScrollDisabled] = useState(false);

    const isTextareaEmpty = inputText.trim() === '';

    const handleScroll = (e) => {
        // Check if the scroll position is at the bottom
        if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
            setScrollDisabled(true); // Disable scrolling when at the bottom
        } else {
            setScrollDisabled(false); // Enable scrolling otherwise
        }
    };

    return (
        <div>
            <div
                onScroll={handleScroll}
                style={{
                    width: '100%',
                    height: '200px', // Set the desired height here
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    overflowY: scrollDisabled ? 'hidden' : 'auto', // Hide scrollbar when disabled
                    padding: '10px',
                    marginBottom: '20px'
                }}
            >
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
                        overflow: scrollDisabled ? 'hidden' : 'auto', // Hide scrollbar when disabled
                    }}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                style={{ padding: '10px 20px', borderRadius: '5px' }}
                onClick={handleConvert}
            >
                Remove Spaces
            </Button>
            {outputText && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Typography variant="h5">Result:</Typography>
                    <div
                        style={{
                            width: '100%',
                            height: '200px', // Set the desired height here
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            overflowY: 'auto', // Always show scrollbar
                            padding: '10px',
                            marginBottom: '20px'
                        }}
                    >
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
            output: 'HelloWorld',
        },
        {
            input: 'This is an example',
            output: 'Thisisanexample',
        },
        {
            input: 'Remove spaces from this text',
            output: 'Removespacesfromthistext',
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
                        <Typography variant="body1">{example.output}</Typography>
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

export default RemoveSpace;
