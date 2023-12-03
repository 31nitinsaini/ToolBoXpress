// ImageFiltersTool.js
import React, { useState } from 'react';
import ImageFilter from 'react-image-filter';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';


const ImageFiltersTool = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('grayscale');
  const [filterValue, setFilterValue] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    resetFilterOptions();
  };

  const resetFilterOptions = () => {
    setFilter('grayscale');
    setFilterValue(0);
    setBrightness(100);
    setContrast(100);
  };
  const currentUrl = window.location.href;
  return (
    <>
     <Helmet>
      <title>ToolboXpress - Image Filter</title>
      <meta name="description" content="Apply creative filters to your images with ToolboXpress Image Filter. Enhance and stylize your photos effortlessly. Fast, easy, and free!" />
      <meta name="keywords" content="Image filter, photo filter, image enhancement, photo editing, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Image Filter" />
      <meta property="og:description" content="Apply creative filters to your images with ToolboXpress Image Filter. Enhance and stylize your photos effortlessly. Fast, easy, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Image Filter" />
      <meta name="twitter:description" content="Apply creative filters to your images with ToolboXpress Image Filter. Enhance and stylize your photos effortlessly. Fast, easy, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4">Image Filters Tool</h1>
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
              </div>
            )}
          </div>
          <div className="col-md-6">
            {selectedImage && (
              <div className="filter-options mt-4">
                <label className="form-label">
                  Select Filter:
                  <select className="form-select" onChange={(e) => setFilter(e.target.value)}>
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
                <button className="btn btn-primary" onClick={resetFilterOptions}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default ImageFiltersTool;
