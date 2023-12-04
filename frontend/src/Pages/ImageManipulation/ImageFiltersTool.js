import React, { useState } from 'react';
import ImageFilter from 'react-image-filter';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const ImageFiltersTool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('grayscale');
  const [filterValue, setFilterValue] = useState(50);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    resetFilterOptions();
  };

  const resetFilterOptions = () => {
    setFilter('grayscale');
    setFilterValue(50);
    setBrightness(100);
    setContrast(100);
  };

  const handleDownload = () => {
    if (selectedImage) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) ${filter}(${filterValue}%)`;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL('image/jpeg', 0.9);
        downloadLink.download = 'filtered_image.jpg';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

      img.src = selectedImage;
    }
  };

  const currentUrl = window.location.href;


  return (
    <>
      <Helmet>
        <title>ToolboXpress - Image Filters</title>
        <meta
          name="description"
          content="Apply creative filters to your images with ToolboXpress Image Filters. Enhance and stylize your photos effortlessly. Fast, easy, and free!"
        />
        <meta
          name="keywords"
          content="Image filters, photo filters, image enhancement, photo editing, ToolboXpress"
        />
        <meta name="author" content="Your Name" />
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="ToolboXpress - Image Filters" />
        <meta
          property="og:description"
          content="Apply creative filters to your images with ToolboXpress Image Filters. Enhance and stylize your photos effortlessly. Fast, easy, and free!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToolboXpress - Image Filters" />
        <meta
          name="twitter:description"
          content="Apply creative filters to your images with ToolboXpress Image Filters. Enhance and stylize your photos effortlessly. Fast, easy, and free!"
        />
        {/* Canonical URL to specify the preferred version of a page */}
        <link rel="canonical" href={currentUrl} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <main>
        <div className="container mt-5">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '2em', color: '#333' }}>Image Filters Tool</h1>
            <p style={{ fontSize: '1.2em', color: '#555' }}>
              Apply creative filters to your images with ToolboXpress Image Filters.
              Enhance and stylize your photos effortlessly. Fast, easy, and free!
              Upload your image, choose from various filters, adjust settings, and preview the stunning results.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="form-label">
                Select an Image:
                <input type="file" className="form-control" onChange={handleImageChange} />
              </label>

              {selectedImage && (
                <div className="mt-4">
                  <h2>Filtered Image Preview</h2>
                  <ImageFilter
                    image={selectedImage}
                    filter={filter}
                    filterValue={filterValue}
                    brightness={brightness}
                    contrast={contrast}
                    className="filtered-image img-fluid"
                    alt="Filtered"
                  />
                  <button
                    className="btn btn-primary mt-3"
                    onClick={handleDownload}
                  >
                    Download Filtered Image
                  </button>
                </div>
              )}
            </div>

            <div className="col-md-6">
              {selectedImage && (
                <div className="filter-options mt-4">
                  <label className="form-label">
                    Select Filter:
                    <select
                      className="form-select"
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="grayscale">Grayscale</option>
                      <option value="sepia">Sepia</option>
                      <option value="invert">Invert</option>
                      {/* Add more filter options as needed */}
                    </select>
                  </label>
                  <label className="form-label">
                    Filter Strength:
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={filterValue}
                      onChange={(e) => setFilterValue(e.target.value)}
                      className="form-range"
                    />
                  </label>
                  <label className="form-label">
                    Brightness:
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={brightness}
                      onChange={(e) => setBrightness(e.target.value)}
                      className="form-range"
                    />
                  </label>
                  <label className="form-label">
                    Contrast:
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={contrast}
                      onChange={(e) => setContrast(e.target.value)}
                      className="form-range"
                    />
                  </label>
                  <button
                    className="btn btn-primary"
                    onClick={resetFilterOptions}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default ImageFiltersTool;
