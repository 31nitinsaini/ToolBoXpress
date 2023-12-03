import React, { useState } from 'react';
import { Container, Typography, TextareaAutosize, Button, Card, CardContent, Grid } from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Helmet } from 'react-helmet';
const UpperToLower = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleConvert = () => {
        const convertedText = inputText.toLowerCase(); // Convert to lowercase
        setOutputText(convertedText);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(outputText);
        setIsCopied(true);
    };

    const setInputTextExample = (exampleText) => {
        setInputText(exampleText);
    };
    const currentUrl = window.location.href;

    return (
        <>

<Helmet>
      <title>ToolboXpress - Upper to Lower Text Converter</title>
      <meta name="description" content="Convert uppercase text to lowercase with ToolboXpress Upper to Lower Text Converter. Change the case of your text easily. Fast, intuitive, and free!" />
      <meta name="keywords" content="Upper to lower text converter, convert case, change text case, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Upper to Lower Text Converter" />
      <meta property="og:description" content="Convert uppercase text to lowercase with ToolboXpress Upper to Lower Text Converter. Change the case of your text easily. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Upper to Lower Text Converter" />
      <meta name="twitter:description" content="Convert uppercase text to lowercase with ToolboXpress Upper to Lower Text Converter. Change the case of your text easily. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>

            <Header />
            <main>
                <Container maxWidth="md">
                    <Typography variant="h4" align="center" gutterBottom>
                        Convert Uppercase to Lowercase
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <ToolArea
                                inputText={inputText}
                                setInputText={setInputText}
                                outputText={outputText}
                                setOutputText={setOutputText}
                                isCopied={isCopied}
                                setIsCopied={setIsCopied}
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
    handleConvert,
    handleCopyToClipboard,
}) => {
    return (
        <div>
            <TextareaAutosize
                rowsMin={5}
                placeholder="Enter text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    minHeight: '200px',
                    maxHeight:'200px'

                }}
            />
            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px' }}
                onClick={handleConvert}
            >
                Convert to Lowercase
            </Button>
            {outputText && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Typography variant="h5">Converted Text:</Typography>
                    <TextareaAutosize
                        rowsMin={5}
                        value={outputText}
                        readOnly
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            minHeight: '200px',
                            maxHeight:'200px'

                        }}
                    />
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
            input: 'HELLO WORLD',
            output: 'hello world',
        },
        {
            input: 'This is an EXAMPLE',
            output: 'this is an example',
        },
        {
            input: 'cOnVeRt ThIs',
            output: 'convert this',
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

export default UpperToLower;
