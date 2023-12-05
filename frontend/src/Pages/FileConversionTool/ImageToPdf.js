import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import {
  Typography,
} from '@mui/material';
import RatingComponent from '../../Components/RatingComponent';

const ImageToPdf = () => {
  const [image, setImage] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const convertToPdf = async () => {
    try {
      if (!image) {
        alert('Please choose an image file.');
        return;
      }

      const imageBytes = await image.arrayBuffer();
      const pdfDoc = await PDFDocument.create();
      const imagePage = pdfDoc.addPage();

      // Determine image format and embed accordingly
      const isPng = image.type === 'image/png';
      const isJpeg = image.type === 'image/jpeg';

      if (isPng) {
        const pngImage = await pdfDoc.embedPng(imageBytes);

        // Set the desired width and height for the image in points
        const desiredWidth = 200; // Replace with your preferred width
        const desiredHeight = 150; // Replace with your preferred height

        // Calculate the position to center the image
        const x = (imagePage.getWidth() - desiredWidth) / 2;
        const y = (imagePage.getHeight() - desiredHeight) / 2;

        imagePage.drawImage(pngImage, {
          x,
          y,
          width: desiredWidth,
          height: desiredHeight,
        });
      } else if (isJpeg) {
        const jpegImage = await pdfDoc.embedJpg(imageBytes);

        // Set the desired width and height for the image in points
        const desiredWidth = 200; // Replace with your preferred width
        const desiredHeight = 150; // Replace with your preferred height

        // Calculate the position to center the image
        const x = (imagePage.getWidth() - desiredWidth) / 2;
        const y = (imagePage.getHeight() - desiredHeight) / 2;

        imagePage.drawImage(jpegImage, {
          x,
          y,
          width: desiredWidth,
          height: desiredHeight,
        });
      } else {
        alert('Invalid image format. Please choose a PNG or JPEG image.');
        return;
      }

      const pdfBytes = await pdfDoc.save();
      setPdfBlob(new Blob([pdfBytes], { type: 'application/pdf' }));
    } catch (error) {
      console.error('Error converting image to PDF:', error);
      alert('Error converting image to PDF. Please try again.');
    }
  };


  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <center>
             <Typography variant="h4" align="center" gutterBottom>
            Image to PDF Converter</Typography>
            <p>
              Transform your image into a polished PDF document effortlessly using ToolboXpress Image to PDF Converter.
              This intuitive and free tool simplifies the conversion process, providing you with a quick and seamless experience.
            </p>
          </center>
          <div className="form-group">
            <label htmlFor="imageFile">Choose Image File (PNG or JPEG):</label>
            <input
              type="file"
              className="form-control-file"
              id="imageFile"
              accept=".png, .jpg, .jpeg"
              onChange={handleImageChange}
            />
          </div>
          <button className="btn btn-primary" onClick={convertToPdf}>
            Convert to PDF
          </button>

          {pdfBlob && (
            <div className="mt-4">
              <h4>Download PDF</h4>
              <a href={URL.createObjectURL(pdfBlob)} download="converted.pdf" className="btn btn-success">
                Download PDF
              </a>
            </div>
          )}
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default ImageToPdf;
