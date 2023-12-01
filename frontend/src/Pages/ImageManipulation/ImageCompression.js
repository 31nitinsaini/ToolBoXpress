// ImageResizeTool.js
import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';

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

  return (
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
  );
};

export default ImageC;
