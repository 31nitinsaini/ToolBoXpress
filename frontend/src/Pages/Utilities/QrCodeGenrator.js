import React, { useState, useRef } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';
import html2canvas from 'html2canvas';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Helmet } from 'react-helmet';
import RatingComponent from '../../Components/RatingComponent';
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
        <img
          alt="QR Code"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrContent)}&color=${qrColor.substr(1)}`}
          style={{ width: '100%', height: 'auto', maxWidth: '300px', margin: '20px 0' }}
        />
      );
    } else {
      // Handle the case where qrContent is empty
      // You can display an error message or take appropriate action
      return null;
    }
  };

  const handleSaveQR = () => {
    // Ensure that qrContent is not empty before saving the QR code
    if (qrContent.trim() !== '') {
      // Capture the QR code as an image using html2canvas
      const qrCodeElement = qrCodeRef.current;

      if (qrCodeElement) {
        html2canvas(qrCodeElement, { useCORS: true }) // Add { useCORS: true } to handle cross-origin issues
          .then((canvas) => {
            // Create a temporary anchor element to trigger the download
            const downloadLink = document.createElement('a');
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.download = 'qrcode.png'; // Set the filename
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
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

  return (
    <>
      <Helmet>
        <title>QR Code Generator</title>
        <meta name="description" content="Generate QR codes with custom content, color, and size." />
        <meta name="keywords" content="QR code, generator, React, HTML2Canvas" />
        {/* Add more SEO-related meta tags as needed */}
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
            </Grid>
            <div style={{ marginTop: '20px', textAlign: 'center' }} ref={qrCodeRef}>
              {handleGenerateQR()}
            </div>
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
