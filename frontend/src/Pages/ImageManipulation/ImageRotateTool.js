import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const ImageRotateTool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [rotatedImage, setRotatedImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setRotatedImage(null); // Clear the previous rotated image
  };

  const handleRotate = async (degrees) => {
    setLoading(true);
    setRotation((prevRotation) => (prevRotation + degrees) % 360);
    await rotateImage(degrees);
    setLoading(false);
  };

  const rotateImage = (degrees) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const radian = (degrees * Math.PI) / 180;

        const rotatedWidth = Math.abs(img.width * Math.cos(radian)) + Math.abs(img.height * Math.sin(radian));
        const rotatedHeight = Math.abs(img.width * Math.sin(radian)) + Math.abs(img.height * Math.cos(radian));

        canvas.width = rotatedWidth;
        canvas.height = rotatedHeight;

        context.translate(rotatedWidth / 2, rotatedHeight / 2);
        context.rotate(radian);
        context.drawImage(img, -img.width / 2, -img.height / 2);

        const rotatedDataUrl = canvas.toDataURL('image/png');
        setRotatedImage(rotatedDataUrl);
        resolve();
      };

      img.src = selectedImage;
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = rotatedImage;
    link.download = 'rotated_image.png';
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
            <h1 style={{ fontSize: '2em', color: '#333' }}>Image Rotate Tool</h1>
            <p style={{ fontSize: '1.2em', color: '#555' }}>
              Rotate and flip your images easily with ToolboXpress Image Rotate Tool. Adjust orientation for better
              presentation. Fast, intuitive, and free!
            </p>
          </div>

          <label>
            Select an Image:
            <input type="file" onChange={handleImageChange} />
          </label>

          {selectedImage && (
            <div>
              <h2>Original Image</h2>
              <div style={{ position: 'relative' }}>
                <img
                  src={selectedImage}
                  alt="Original"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    margin: '10px',
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <button onClick={() => handleRotate(90)} style={{ marginRight: '10px' }}>
                    Rotate 90°
                  </button>
                  <button onClick={() => handleRotate(-90)}>Rotate -90°</button>
                </div>
              </div>

              {rotatedImage && (
                <div>
                  <h2>Rotated Image Preview</h2>
                  {loading ? (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                      <p>Loading...</p>
                    </div>
                  ) : (
                    <>
                     
                      <button onClick={handleDownload}>Download Rotated Image</button>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default ImageRotateTool;
