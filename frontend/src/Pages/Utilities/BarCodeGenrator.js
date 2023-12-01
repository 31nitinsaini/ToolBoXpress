import React, { useState, useRef } from 'react';
import Barcode from 'react-barcode';
import {
    TextField,
    Button,
    Typography,
    Container,
    Grid,
    Paper,
} from '@mui/material';
import html2canvas from 'html2canvas';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Helmet } from 'react-helmet';

const BarCodeGenerator = () => {
    const [barcodeValue, setBarcodeValue] = useState('');
    const barcodeRef = useRef(null);

    const handleGenerateBarcode = () => {
        if (barcodeValue.trim() !== '') {
            return (
                <Barcode
                    value={barcodeValue}
                    width={2} // Adjust the barcode width as needed
                    height={50} // Adjust the barcode height as needed
                />
            );
        } else {
            // Handle the case where barcodeValue is empty
            // You can display an error message or take appropriate action
        }
    };

    const handleSaveBarcode = () => {
        if (barcodeValue.trim() !== '') {
            if (barcodeRef.current) {
                html2canvas(barcodeRef.current)
                    .then((canvas) => {
                        const barcodeDataURL = canvas.toDataURL('image/png');
                        const downloadLink = document.createElement('a');
                        downloadLink.href = barcodeDataURL;
                        downloadLink.download = 'barcode.png';
                        downloadLink.click();
                    })
                    .catch((error) => {
                        console.error('Error capturing barcode:', error);
                    });
            } else {
                console.log('Barcode element not found.');
            }
        } else {
            // Handle the case where barcodeValue is empty
            // You can display an error message or take appropriate action
        }
    };
 // Fetch the current page URL
 const currentUrl = window.location.href;
    return (
        <>
         <Helmet>
      <title>ToolboXpress - Bar Code Generator</title>
      <meta name="description" content="Generate barcodes online with ToolboXpress Bar Code Generator. Create custom barcodes for products, inventory, and more. Fast, easy, and free!" />
      <meta name="keywords" content="bar code generator, QR code, barcode maker, product barcodes, inventory barcode, online tools" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Bar Code Generator" />
      <meta property="og:description" content="Generate barcodes online with ToolboXpress Bar Code Generator. Create custom barcodes for products, inventory, and more. Fast, easy, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Bar Code Generator" />
      <meta name="twitter:description" content="Generate barcodes online with ToolboXpress Bar Code Generator. Create custom barcodes for products, inventory, and more. Fast, easy, and free!" />

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
                            Barcode Generator
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Enter content for barcode"
                                    value={barcodeValue}
                                    onChange={(e) => setBarcodeValue(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: '20px' }}>
                            <div ref={barcodeRef} style={{ display: 'inline-block' }}>
                                {handleGenerateBarcode()}
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleSaveBarcode}
                            style={{ marginTop: '20px' }}
                        >
                            Save Barcode
                        </Button>
                    </Paper>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default BarCodeGenerator;
