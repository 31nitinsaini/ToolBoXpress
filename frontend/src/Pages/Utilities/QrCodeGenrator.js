import React, { useState, useRef } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';
import html2canvas from 'html2canvas';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import QRCodeWithLogo from 'react-qrcode-logo'; // Import the QRCodeWithLogo component
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const QrCodeGenrator = () => {
    const [qrContent, setQrContent] = useState('');
    const [qrColor, setQrColor] = useState('#000000');
    const [qrSize, setQrSize] = useState(128);
    const [additionalText, setAdditionalText] = useState('');

    const qrCodeRef = useRef(null);

    const handleGenerateQR = () => {
        // Ensure that qrContent is not empty before generating the QR code
        if (qrContent.trim() !== '') {
            return (
                <QRCodeWithLogo
                    value={qrContent}
                    size={qrSize}
                    fgColor={qrColor}
                    imageSettings={{
                        src: 'path/to/your/logo.png', // Replace with the path to your logo image
                        height: 30, // Set the height of the logo
                        width: 30, // Set the width of the logo
                        excavate: true, // Set to true to make the logo transparent
                    }}
                />
            );
        } else {
            // Handle the case where qrContent is empty
            // You can display an error message or take appropriate action
        }
    };

    const handleSaveQR = () => {
        // Ensure that qrContent is not empty before saving the QR code
        if (qrContent.trim() !== '') {
            // Capture the QR code as an image using html2canvas
            const qrCodeElement = qrCodeRef.current;

            if (qrCodeElement) {
                html2canvas(qrCodeElement)
                    .then((canvas) => {
                        // Convert the canvas to a data URL
                        const qrCodeDataURL = canvas.toDataURL('image/png');

                        // Create a temporary anchor element to trigger the download
                        const downloadLink = document.createElement('a');
                        downloadLink.href = qrCodeDataURL;
                        downloadLink.download = 'qrcode.png'; // Set the filename
                        downloadLink.click();
                    })
                    .catch((error) => {
                        console.error('Error capturing QR code:', error);
                        // Handle any errors that occur during image capture
                    });
            }
        } else {
            // Handle the case where qrContent is empty
            // You can display an error message or take appropriate action
        }
    };
    const currentUrl = window.location.href;
    return (
        <>
         
    <Helmet>
      <title>ToolboXpress - QR Code Generator</title>
      <meta name="description" content="Generate QR codes quickly with ToolboXpress QR Code Generator. Create codes for URLs, text, contacts, and more. Fast, easy, and free!" />
      <meta name="keywords" content="QR code generator, create QR codes, URL QR code, text QR code, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - QR Code Generator" />
      <meta property="og:description" content="Generate QR codes quickly with ToolboXpress QR Code Generator. Create codes for URLs, text, contacts, and more. Fast, easy, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - QR Code Generator" />
      <meta name="twitter:description" content="Generate QR codes quickly with ToolboXpress QR Code Generator. Create codes for URLs, text, contacts, and more. Fast, easy, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
            <Header />
            <main>
                <Container>
                    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            QR Code Generator
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Enter content for QR code"
                                    value={qrContent}
                                    onChange={(e) => setQrContent(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    type="color"
                                    label="QR code color"
                                    value={qrColor}
                                    onChange={(e) => setQrColor(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="QR code size"
                                    value={qrSize}
                                    onChange={(e) => setQrSize(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: '20px' }}>
                            {qrContent && (
                                <div ref={qrCodeRef}>
                                    {handleGenerateQR()}
                                </div>
                            )}
                        </div>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            label="Additional information"
                            value={additionalText}
                            onChange={(e) => setAdditionalText(e.target.value)}
                            style={{ marginTop: '20px' }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleSaveQR}
                            style={{ marginTop: '20px' }}
                        >
                            Save QR Code
                        </Button>
                    </Paper>
                </Container>
            </main>
            <RatingComponent/>
            <Footer />
        </>
    );
};

export default QrCodeGenrator;
