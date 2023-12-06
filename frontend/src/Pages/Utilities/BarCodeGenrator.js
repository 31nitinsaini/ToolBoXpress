import React, { useState, useRef } from 'react';
import Barcode from 'react-barcode';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Select,
  MenuItem,
  Paper,
} from '@mui/material';
import html2canvas from 'html2canvas';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Helmet } from 'react-helmet';
import RatingComponent from '../../Components/RatingComponent';

const BarCodeGenerator = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const barcodeRef = useRef(null);
  const [codeFormat, setCodeFormat] = useState('CODE128'); // Default code format

  const handleGenerateBarcode = () => {
    if (barcodeValue.trim() !== '') {
      return (
        <Barcode
          value={barcodeValue}
          format={codeFormat}
        // Remove fixed width and height
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
        html2canvas(barcodeRef.current, {
          width: barcodeRef.current.offsetWidth,
          height: barcodeRef.current.offsetHeight,
        })
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
        <title>ToolBoXpress - Barcode Generator</title>
        <meta
          name="description"
          content="Generate and save barcodes easily with ToolBoXpress Barcode Generator. Create barcodes with various formats and customize the content. Fast, easy, and free!"
        />
        <meta
          name="keywords"
          content="Barcode generator, generate barcode, barcode format, ToolboXpress"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="ToolBoXpress - Barcode Generator" />
        <meta
          property="og:description"
          content="Generate and save barcodes easily with ToolBoXpress Barcode Generator. Create barcodes with various formats and customize the content. Fast, easy, and free!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToolBoXpress - Barcode Generator" />
        <meta
          name="twitter:description"
          content="Generate and save barcodes easily with ToolBoXpress Barcode Generator. Create barcodes with various formats and customize the content. Fast, easy, and free!"
        />

        {/* Canonical URL to specify the preferred version of a page */}
        <link rel="canonical" href={currentUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Header />
      <main>
        <div className='container my-5'>
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
              <Grid item xs={12}>
                <Select
                  value={codeFormat}
                  onChange={(e) => setCodeFormat(e.target.value)}
                  label="Code Format"
                >
                  <MenuItem value="CODE128">CODE128</MenuItem>
                  <MenuItem value="EAN13">EAN13</MenuItem>
                  <MenuItem value="ITF14">ITF14</MenuItem>
                  <MenuItem value="MSI">MSI</MenuItem>
                  <MenuItem value="pharmacode">pharmacode</MenuItem>
                  <MenuItem value="codabar">codabar</MenuItem>
                  <MenuItem value="upc">upc</MenuItem>
                  {/* Add more code formats as needed */}
                </Select>
              </Grid>
            </Grid>
            <div
              style={{
                marginTop: '20px',
                textAlign: 'center',
                width: '100%',
                overflow: 'auto',
              }}
            >
              <div ref={barcodeRef}>{handleGenerateBarcode()}</div>
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

          <div className='my-5'>
            <ul>
              <li><code>CODE128</code>: Code 128 - A high-density linear barcode symbology widely used for various applications, including inventory management and shipping.</li>
              <li><code>EAN13</code>: EAN-13 - A standard barcode format used for product identification, especially in retail, with a 13-digit code.</li>
              <li><code>ITF14</code>: ITF-14 - Used for marking cartons, cases, and pallets with a 14-digit barcode, often used in logistics and supply chain.</li>
              <li><code>MSI</code>: MSI Barcode - A barcode symbology similar to UPC, used primarily for inventory tracking and management.</li>
              <li><code>pharmacode</code>: Pharmacode - A barcode standard used in the pharmaceutical industry to represent numerical values on packages.</li>
              <li><code>codabar</code>: Codabar - A linear barcode symbology commonly used in libraries, blood banks, and FedEx airbills.</li>
              <li><code>upc</code>: UPC - Universal Product Code, a widely recognized barcode used in retail for product identification and inventory management.</li>
            </ul>

          </div>
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default BarCodeGenerator;
