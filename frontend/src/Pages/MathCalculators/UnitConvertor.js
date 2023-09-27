import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const UnitConverter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState('');

  const categories = [
    { label: 'Temperature', units: ['Celsius', 'Fahrenheit', 'Kelvin'] },
    { label: 'Length', units: ['Meter', 'Foot', 'Inch', 'Yard'] },
    { label: 'Volume', units: ['Liter', 'Gallon', 'Cubic Meter'] },
    { label: 'Weight', units: ['Kilogram', 'Pound', 'Ounce'] },
    { label: 'Time', units: ['Second', 'Minute', 'Hour', 'Day'] },
    { label: 'Area', units: ['Square Meter', 'Square Foot', 'Square Inch'] },
    { label: 'Speed', units: ['Meter/Second', 'Kilometer/Hour', 'Mile/Hour'] },
    { label: 'Currency', units: ['USD', 'EUR', 'JPY', 'GBP'] },
    // Add more categories and units here
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setInputValue('');
    setFromUnit('');
    setToUnit('');
    setResult('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    convertUnits(e.target.value);
  };

  const handleFromUnitChange = (e) => {
    setFromUnit(e.target.value);
    convertUnits(inputValue, e.target.value, toUnit);
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
    convertUnits(inputValue, fromUnit, e.target.value);
  };

  const convertUnits = (value, from, to) => {
    // Implement unit conversion logic based on the selected category
    // For simplicity, we'll just pass the value through without conversion for this example.
    setResult(value);
  };

  return (
    <>
      <Header />
      <main className="container mt-5">
        <h1 className="mb-4">Unit Converter</h1>
        <div className="row">
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.label} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedCategory && (
          <div className="row mt-4">
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
              />
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={fromUnit}
                onChange={handleFromUnitChange}
              >
                <option value="">Select Unit</option>
                {categories
                  .find((category) => category.label === selectedCategory)
                  .units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-md-2">
              <span className="mt-2">=</span>
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                value={result}
                readOnly
              />
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={toUnit}
                onChange={handleToUnitChange}
              >
                <option value="">Select Unit</option>
                {categories
                  .find((category) => category.label === selectedCategory)
                  .units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default UnitConverter;
