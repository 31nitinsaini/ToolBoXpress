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
  const [compressionQuality, setCompressionQuality] = useState(80);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Resize image with fixed height and dynamic width
    Resizer.imageFileResizer(
      file,
      width, // new width
      width * (file.height / file.width), // calculate height to maintain aspect ratio
      'JPEG', // format
      100, // quality
      0, // rotation
      (uri) => {
        setResizedImage(uri);
      },
      'base64' // output type
    );

    setSelectedImage(URL.createObjectURL(file));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resizedImage;
    link.download = 'resized_and_compressed_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const currentUrl = window.location.href;

  return (
    <>
    <Helmet>
      <title>ToolboXpress - Image Compression</title>
      <meta name="description" content="Compress images quickly and efficiently with ToolboXpress Image Compression. Reduce file sizes for faster web page loading. Fast, easy, and free!" />
      <meta name="keywords" content="Image compression, compress images, reduce file size, web development, optimization, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Image Compression" />
      <meta property="og:description" content="Compress images quickly and efficiently with ToolboXpress Image Compression. Reduce file sizes for faster web page loading. Fast, easy, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Image Compression" />
      <meta name="twitter:description" content="Compress images quickly and efficiently with ToolboXpress Image Compression. Reduce file sizes for faster web page loading. Fast, easy, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>    <Header/>
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <label>
        Select an Image:
        <input type="file" onChange={handleImageChange} />
      </label>

      <div style={{ marginTop: '20px' }}>
        <label>
          Compression Quality:
          <input
            type="number"
            value={compressionQuality}
            onChange={(e) => setCompressionQuality(e.target.value)}
          />
        </label>
      </div>

      {resizedImage && (
        <div>
          <button onClick={handleDownload} style={{ marginTop: '20px' }}>
            Download Resized and Compressed Image
          </button>
        </div>
      )}
    </div>
    <RatingComponent/>
    <Footer/>
    
    </>
  );
};

export default ImageC;
