// ImageRotateTool.js
import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

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
    <Footer/>
    </>
    
  );
};

export default ImageRotateTool;
