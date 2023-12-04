import React, { useState, useRef } from 'react';
import Cropper from 'react-easy-crop';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const ImageCropTool = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const inputRef = useRef();

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setCroppedImage(null); // Reset cropped image when a new file is selected
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = async () => {
    if (croppedAreaPixels) {
      try {
        const croppedImageBase64 = await getCroppedImg(image, croppedAreaPixels);
        setCroppedImage(croppedImageBase64);
      } catch (e) {
        console.error('Error cropping image:', e);
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = croppedImage;
    link.download = 'cropped_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', (error) => reject(error));
      img.src = url;
    });

  const getCroppedImg = async (imageSrc, crop) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    // You can adjust the quality of the cropped image (0.9 is a good value)
    return canvas.toDataURL('image/jpeg', 0.9);
  };

  const styles = {
    container: {
      marginTop: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    card: {
      maxWidth: '600px',
      width: '100%',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    input: {
      marginBottom: '20px',
    },
    cropper: {
      position: 'relative',
      width: '100%',
      height: '300px',
      marginBottom: '20px',
    },
    button: {
      width: '100%',
      marginBottom: '10px',
    },
    croppedImage: {
      maxWidth: '100%',
      height: 'auto',
      marginTop: '20px',
    },
  };

  const currentUrl = window.location.href;

  return (
    <>
        <Helmet>
      <title>ToolboXpress - Image Crop Tool</title>
      <meta name="description" content="Crop images easily with ToolboXpress Image Crop Tool. Customize and resize images for your projects. Fast, intuitive, and free!" />
      <meta name="keywords" content="Image crop tool, crop images, resize images, image customization, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Image Crop Tool" />
      <meta property="og:description" content="Crop images easily with ToolboXpress Image Crop Tool. Customize and resize images for your projects. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Image Crop Tool" />
      <meta name="twitter:description" content="Crop images easily with ToolboXpress Image Crop Tool. Customize and resize images for your projects. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
      <Header />
      <main>
        <div className='container my-5' style={styles.container}>
          {/* Heading Section */}
          <div>
            <h1 style={{ fontSize: '2em', color: '#333' }}>Image Crop Tool</h1>
            <p style={{ fontSize: '1.2em', color: '#555' }}>
              Easily crop and customize images with ToolboXpress Image Crop Tool.
              Resize and focus on the most important parts of your images for your projects.
              Fast, intuitive, and free! Upload your image, adjust the crop, and download the customized result instantly.
            </p>
          </div>

          <div style={styles.card}>
            <input type="file" accept="image/*" onChange={handleFileChange} ref={inputRef} style={styles.input} />
            {image && (
              <div style={styles.cropper}>
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 3}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </div>
            )}

            <button onClick={handleCrop} className="btn btn-primary" style={styles.button}>
              Crop Image
            </button>

            {croppedImage && (
              <div>
                <img src={croppedImage} alt="Cropped" style={styles.croppedImage} />
                <button onClick={handleDownload} className="btn btn-success" style={styles.button}>
                  Download Cropped Image
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default ImageCropTool;
