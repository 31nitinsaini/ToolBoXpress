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

    return (
        <>
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
