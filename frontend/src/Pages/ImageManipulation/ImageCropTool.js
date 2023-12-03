// ImageCropTool.js
import React, { useState, useRef } from 'react';
import Cropper from 'react-easy-crop';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Rating from 'react-rating';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';
const ImageCropTool = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
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
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = async () => {
    if (croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels);
        // Handle the cropped image (e.g., display, upload, etc.)
        console.log('Cropped Image:', croppedImage);
      } catch (e) {
        console.error('Error cropping image:', e);
      }
    }
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

    const naturalWidth = image.naturalWidth;
    const naturalHeight = image.naturalHeight;

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

    // If you want a circular crop, uncomment the next line
    // const roundedCanvas = getRoundedCanvas(canvas);

    // You can adjust the quality of the cropped image (0.9 is a good value)
    return canvas.toDataURL('image/jpeg', 0.9);
  };

  const styles = {
    container: {
      marginTop: '50px',
      display: 'flex',
      justifyContent: 'center',
    },
    card: {
      width: '400px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    input: {
      marginBottom: '10px',
    },
    cropper: {
      marginBottom: '10px',
    },
    button: {
      width: '100%',
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
      <main style={styles.container}>
        <div style={styles.card}>
          <input type="file" accept="image/*" onChange={handleFileChange} ref={inputRef} style={styles.input} />
          {image && (
            <div>
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                style={styles.cropper}
              />
              <button onClick={handleCrop} className="btn btn-primary" style={styles.button}>
                Crop Image
              </button>
            </div>
          )}
        </div>
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default ImageCropTool;
