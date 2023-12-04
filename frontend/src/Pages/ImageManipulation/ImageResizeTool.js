// ImageResizeTool.js
import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const ImageResizeTool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [quality, setQuality] = useState(100);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    Resizer.imageFileResizer(
      file,
      width,
      height,
      'JPEG',
      quality,
      0,
      (uri) => {
        setResizedImage(uri);
      },
      'base64'
    );

    setSelectedImage(URL.createObjectURL(file));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resizedImage;
    link.download = 'resized_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const currentUrl = window.location.href;
  return (
    <>
     <Helmet>
      <title>ToolboXpress - Image Resize Tool</title>
      <meta name="description" content="Resize images quickly and easily with ToolboXpress Image Resize Tool. Customize dimensions for web and print. Fast, intuitive, and free!" />
      <meta name="keywords" content="Image resize tool, resize images, image dimensions, image customization, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Image Resize Tool" />
      <meta property="og:description" content="Resize images quickly and easily with ToolboXpress Image Resize Tool. Customize dimensions for web and print. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Image Resize Tool" />
      <meta name="twitter:description" content="Resize images quickly and easily with ToolboXpress Image Resize Tool. Customize dimensions for web and print. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
    <Header/>
    <main >
      <div className='container mty-5'>
      {/* Heading Section */}
<div style={{ textAlign: 'center', marginBottom: '20px' }}>
    <h1 style={{ fontSize: '2em', color: '#333' }}>Image Resize Tool</h1>
    <p style={{ fontSize: '1.2em', color: '#555' }}>
        Quickly and easily resize images with ToolboXpress Image Resize Tool.
        Customize dimensions for web and print, ensuring your images fit perfectly.
        Fast, intuitive, and free! Simply upload your image, set the desired width, height, and quality,
        and download the resized image instantly.
    </p>
</div>

      <label>
        Select an Image:
        <input type="file" onChange={handleImageChange} />
      </label>

      <div style={{ marginTop: '20px' }}>
        <label>
          Width:
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
        <label style={{ marginLeft: '10px' }}>
          Height:
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label style={{ marginLeft: '10px' }}>
          Quality:
          <input type="number" value={quality} onChange={(e) => setQuality(e.target.value)} />
        </label>
      </div>

      {resizedImage && (
        <div>
          <button onClick={handleDownload} style={{ marginTop: '20px' }}>
            Download Resized Image
          </button>
        </div>
      )}
      </div>
    </main>
    <RatingComponent/>
    <Footer/>
    </>
  );
};

export default ImageResizeTool;
