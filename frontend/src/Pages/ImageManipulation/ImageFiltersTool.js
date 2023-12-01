// ImageFiltersTool.js
import React, { useState } from 'react';
import ImageFilter from 'react-image-filter';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


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

  return (
    <>
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
      <Footer />
    </>
  );
};

export default ImageFiltersTool;
