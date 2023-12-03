// ImageRotateTool.js
import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const ImageRotateTool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [rotation, setRotation] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleRotate = (degrees) => {
    setRotation((prevRotation) => (prevRotation + degrees) % 360);
  };
  const currentUrl = window.location.href;
  return (
    <>
    <Helmet>
      <title>ToolboXpress - Image Rotate Tool</title>
      <meta name="description" content="Rotate and flip your images easily with ToolboXpress Image Rotate Tool. Adjust orientation for better presentation. Fast, intuitive, and free!" />
      <meta name="keywords" content="Image rotate tool, flip images, rotate pictures, image orientation, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Image Rotate Tool" />
      <meta property="og:description" content="Rotate and flip your images easily with ToolboXpress Image Rotate Tool. Adjust orientation for better presentation. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Image Rotate Tool" />
      <meta name="twitter:description" content="Rotate and flip your images easily with ToolboXpress Image Rotate Tool. Adjust orientation for better presentation. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
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
            style={{ maxWidth: '100%', maxHeight: '300px', margin: '10px', transform: `rotate(${rotation}deg)` }}
          />
          <div>
            <button onClick={() => handleRotate(90)} style={{ marginRight: '10px' }}>
              Rotate 90°
            </button>
            <button onClick={() => handleRotate(-90)}>Rotate -90°</button>
          </div>
        </div>
      )}
    </div>
    <RatingComponent/>
    <Footer/>
    </>
    
  );
};

export default ImageRotateTool;
