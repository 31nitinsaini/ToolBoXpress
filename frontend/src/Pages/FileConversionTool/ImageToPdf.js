import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
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
        const { width, height } = pngImage.scale(0.5);
  
        // Calculate the position to center the image
        const x = (imagePage.getWidth() - width) / 2;
        const y = (imagePage.getHeight() - height) / 2;
  
        imagePage.drawImage(pngImage, {
          x,
          y,
          width,
          height,
        });
      } else if (isJpeg) {
        const jpegImage = await pdfDoc.embedJpg(imageBytes);
        const { width, height } = jpegImage.scale(0.5);
  
        // Calculate the position to center the image
        const x = (imagePage.getWidth() - width) / 2;
        const y = (imagePage.getHeight() - height) / 2;
  
        imagePage.drawImage(jpegImage, {
          x,
          y,
          width,
          height,
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
  <Header/>
  <div className="container mt-5">
      <h2>Image to PDF Converter</h2>
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
    <RatingComponent/>
  <Footer/>
  </>
  );
};

export default ImageToPdf;
