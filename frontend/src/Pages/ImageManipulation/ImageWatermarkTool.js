import React, { useState, useRef } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const ImageWatermarkTool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [watermarkedImage, setWatermarkedImage] = useState(null);
  const [watermarkText, setWatermarkText] = useState('');
  const [watermarkColor, setWatermarkColor] = useState('#ffffff'); // Default color: white
  const [watermarkPosition, setWatermarkPosition] = useState('bottomRight'); // Default position: bottom right
  const canvasRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setWatermarkedImage(null); // Clear the previous watermarked image
  };

  const handleWatermarkChange = (e) => {
    setWatermarkText(e.target.value);
  };

  const handleColorChange = (e) => {
    setWatermarkColor(e.target.value);
  };

  const handlePositionChange = (e) => {
    setWatermarkPosition(e.target.value);
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
      context.fillStyle = watermarkColor;
      
      // Calculate watermark position
      let x, y;
      switch (watermarkPosition) {
        case 'topLeft':
          x = 20;
          y = 40;
          break;
        case 'topRight':
          x = image.width - context.measureText(watermarkText).width - 20;
          y = 40;
          break;
        case 'bottomLeft':
          x = 20;
          y = image.height - 20;
          break;
        case 'bottomRight':
        default:
          x = image.width - context.measureText(watermarkText).width - 20;
          y = image.height - 20;
          break;
      }

      context.fillText(watermarkText, x, y);

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

  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        {/* ... (unchanged Helmet configuration) */}
      </Helmet>
      <Header />
      <main>
        <div className="container my-5">
          {/* Heading Section */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '2em', color: '#333' }}>Image Watermark Tool</h1>
            <p style={{ fontSize: '1.2em', color: '#555' }}>
              Add watermarks to your images easily with ToolboXpress Image Watermark Tool.
              Protect your visuals and maintain ownership. Fast, intuitive, and free!
            </p>
          </div>

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

              <label>
                Watermark Color:
                <input type="color" value={watermarkColor} onChange={handleColorChange} />
              </label>

              <label>
                Watermark Position:
                <select value={watermarkPosition} onChange={handlePositionChange}>
                  <option value="topLeft">Top Left</option>
                  <option value="topRight">Top Right</option>
                  <option value="bottomLeft">Bottom Left</option>
                  <option value="bottomRight">Bottom Right</option>
                </select>
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
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default ImageWatermarkTool;
