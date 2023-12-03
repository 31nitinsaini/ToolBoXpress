import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const ImageConversion = () => {
  const [image, setImage] = useState(null);
  const [convertedDataUrl, setConvertedDataUrl] = useState(null);
  const [newFormat, setNewFormat] = useState('png'); // Default new format

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormatChange = (e) => {
    setNewFormat(e.target.value);
  };

  const convertImage = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, img.width, img.height);

      const convertedDataUrl = canvas.toDataURL(`image/${newFormat}`);
      setConvertedDataUrl(convertedDataUrl);
    };

    img.src = image;
  };

  const downloadConvertedImage = () => {
    const link = document.createElement('a');
    link.href = convertedDataUrl;
    link.download = `converted_image.${newFormat}`;
    link.click();
  };
  const currentUrl = window.location.href;

  return (
    <>
    <Helmet>
      <title>ToolboXpress - Image Conversion Tool</title>
      <meta name="description" content="Convert images to different formats with ToolboXpress Image Conversion Tool. Change image formats easily for various purposes. Fast, intuitive, and free!" />
      <meta name="keywords" content="Image conversion tool, convert image formats, image file converter, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Image Conversion Tool" />
      <meta property="og:description" content="Convert images to different formats with ToolboXpress Image Conversion Tool. Change image formats easily for various purposes. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Image Conversion Tool" />
      <meta name="twitter:description" content="Convert images to different formats with ToolboXpress Image Conversion Tool. Change image formats easily for various purposes. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
      <Header />
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <input type="file" className="form-control" onChange={handleImageChange} />
            {image && (
              <>
                <img src={image} alt="Original" className="img-fluid mt-3" />
                <div className="mt-3">
                  <label htmlFor="format" className="form-label">Choose new format:</label>
                  <select id="format" className="form-select" onChange={handleFormatChange} value={newFormat}>
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                    <option value="webp">WEBP</option>
                    {/* Add more format options as needed */}
                  </select>
                </div>
                <button className="btn btn-primary mt-3" onClick={convertImage}>Convert Image</button>
              </>
            )}
          </div>
          {convertedDataUrl && (
            <div className="col-md-6 mt-4">
              <img src={convertedDataUrl} alt="Converted" className="img-fluid" />
              <button className="btn btn-primary mt-3" onClick={downloadConvertedImage}>Download Converted Image</button>
            </div>
          )}
        </div>
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default ImageConversion;
