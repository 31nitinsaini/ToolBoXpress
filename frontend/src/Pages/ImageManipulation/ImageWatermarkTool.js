// ImageWatermarkTool.js
import React, { useState, useRef } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const ImageWatermarkTool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [watermarkedImage, setWatermarkedImage] = useState(null);
  const [watermarkText, setWatermarkText] = useState('');
  const canvasRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setWatermarkedImage(null); // Clear the previous watermarked image
  };

  const handleWatermarkChange = (e) => {
    setWatermarkText(e.target.value);
  };

  const handleAddWatermark = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = selectedImage;

    image.onload = () => {
      // Set canvas dimensions to match the original image dimensions
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the original image on the canvas
      context.drawImage(image, 0, 0, image.width, image.height);

      // Add watermark text
      context.font = '20px Arial';
      context.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Adjust alpha channel for watermark transparency
      context.fillText(watermarkText, 20, image.height - 20);

      // Update watermarked image state
      setWatermarkedImage(canvas.toDataURL('image/png'));
    };
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = watermarkedImage;
    link.download = 'image_with_watermark.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <>
  <Header/>
  <div style={{ textAlign: 'center', margin: '20px' }}>
      <label>
        Select an Image:
        <input type="file" onChange={handleImageChange} />
      </label>

      {selectedImage && (
        <div>
          <h2>Original Image</h2>
          <img
            src={selectedImage}
            alt="Original"
            style={{ maxWidth: '100%', maxHeight: '300px', margin: '10px' }}
          />

          <label>
            Watermark Text:
            <input type="text" value={watermarkText} onChange={handleWatermarkChange} />
          </label>

          <div style={{ marginTop: '10px' }}>
            <button onClick={handleAddWatermark} style={{ marginRight: '10px' }}>
              Add Watermark
            </button>
            <button onClick={handleDownload}>Download Image with Watermark</button>
          </div>

          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      )}

      {watermarkedImage && (
        <div>
          <h2>Watermarked Image Preview</h2>
          <img
            src={watermarkedImage}
            alt="Watermarked"
            style={{ maxWidth: '100%', maxHeight: '300px', margin: '10px' }}
          />
        </div>
      )}
    </div>
  <Footer/>
  </>
  );
};

export default ImageWatermarkTool;
