import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';
const UnitConverter = () => {
  const [selectedCategory, setSelectedCategory] = useState('Temperature');
  const [inputValue, setInputValue] = useState('1');
  const [fromUnit, setFromUnit] = useState('Celsius');
  const [toUnit, setToUnit] = useState('Fahrenheit');
  const [result, setResult] = useState('33.8');
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');

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
    setError('');
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
    try {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue)) {
        throw new Error('Invalid input');
      }

      if (selectedCategory === 'Temperature') {
        setResult(convertTemperature(numericValue, from, to));
      } else if (selectedCategory === 'Length') {
        setResult(convertLength(numericValue, from, to));
      } else if (selectedCategory === 'Volume') {
        setResult(convertVolume(numericValue, from, to));
      } else if (selectedCategory === 'Weight') {
        setResult(convertWeight(numericValue, from, to));
      } else if (selectedCategory === 'Time') {
        setResult(convertTime(numericValue, from, to));
      } else if (selectedCategory === 'Area') {
        setResult(convertArea(numericValue, from, to));
      } else if (selectedCategory === 'Speed') {
        setResult(convertSpeed(numericValue, from, to));
      } else if (selectedCategory === 'Currency') {
        setResult(convertCurrency(numericValue, from, to));
      }
      setError('');
    } catch (error) {
      setResult('');
      setError('Error in conversion');
    }
  };

  const convertTemperature = (value, from, to) => {
    if (from === 'Celsius' && to === 'Fahrenheit') {
      return (value * 9/5) + 32;
    }
    if (from === 'Fahrenheit' && to === 'Celsius') {
      return (value - 32) * 5/9;
    }
    if (from === 'Celsius' && to === 'Kelvin') {
      return value + 273.15;
    }
    if (from === 'Kelvin' && to === 'Celsius') {
      return value - 273.15;
    }
    return value;
  };

  const convertLength = (value, from, to) => {
    if (from === 'Meter' && to === 'Foot') {
      return value * 3.28084;
    }
    if (from === 'Foot' && to === 'Meter') {
      return value / 3.28084;
    }
    return value;
  };

  const convertVolume = (value, from, to) => {
    if (from === 'Liter' && to === 'Gallon') {
      return value * 0.264172;
    }
    if (from === 'Gallon' && to === 'Liter') {
      return value / 0.264172;
    }
    if (from === 'Liter' && to === 'Cubic Meter') {
      return value * 0.001;
    }
    if (from === 'Cubic Meter' && to === 'Liter') {
      return value * 1000;
    }
    return value;
  };

  const convertWeight = (value, from, to) => {
    if (from === 'Kilogram' && to === 'Pound') {
      return value * 2.20462;
    }
    if (from === 'Pound' && to === 'Kilogram') {
      return value / 2.20462;
    }
    if (from === 'Kilogram' && to === 'Ounce') {
      return value * 35.274;
    }
    if (from === 'Ounce' && to === 'Kilogram') {
      return value / 35.274;
    }
    return value;
  };

  const convertTime = (value, from, to) => {
    if (from === 'Second' && to === 'Minute') {
      return value / 60;
    }
    if (from === 'Minute' && to === 'Second') {
      return value * 60;
    }
    if (from === 'Hour' && to === 'Day') {
      return value / 24;
    }
    if (from === 'Day' && to === 'Hour') {
      return value * 24;
    }
    return value;
  };

  const convertArea = (value, from, to) => {
    if (from === 'Square Meter' && to === 'Square Foot') {
      return value * 10.764;
    }
    if (from === 'Square Foot' && to === 'Square Meter') {
      return value / 10.764;
    }
    return value;
  };

  const convertSpeed = (value, from, to) => {
    if (from === 'Meter/Second' && to === 'Kilometer/Hour') {
      return value * 3.6;
    }
    if (from === 'Kilometer/Hour' && to === 'Meter/Second') {
      return value / 3.6;
    }
    if (from === 'Mile/Hour' && to === 'Kilometer/Hour') {
      return value * 1.60934;
    }
    if (from === 'Kilometer/Hour' && to === 'Mile/Hour') {
      return value / 1.60934;
    }
    return value;
  };

  const convertCurrency = (value, from, to) => {
    // Note: This is a placeholder; use a real API for accurate currency conversion rates
    const conversionRates = {
      'USD-EUR': 0.85,
      'USD-JPY': 115.205,
      'USD-GBP': 0.73,
      'EUR-USD': 1.18,
      'EUR-JPY': 135.59,
      'EUR-GBP': 0.88,
      'JPY-USD': 0.0087,
      'JPY-EUR': 0.0074,
      'JPY-GBP': 0.0065,
      'GBP-USD': 1.37,
      'GBP-EUR': 1.13,
      'GBP-JPY': 153.69,
    };

    const rateKey = `${from}-${to}`;
    if (conversionRates[rateKey]) {
      return value * conversionRates[rateKey];
    }

    return value;
  };

  useEffect(() => {
    generateDescription();
  }, [selectedCategory]);

  const generateDescription = () => {
    const category = categories.find((cat) => cat.label === selectedCategory);
    if (category) {
      setDescription(
        `Convert ${category.units[0]} to ${category.units[1]} and more with ToolboXpress Unit Converter. Switch between different measurement systems for accurate conversions. Fast, intuitive, and free!`
      );
    }
  };
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>ToolboXpress - Unit Converter</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Unit converter, convert units, measurement conversion, ToolboXpress"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="ToolboXpress - Unit Converter" />
        <meta
          property="og:description"
          content="Convert units easily with ToolboXpress Unit Converter. Switch between different measurement systems for accurate conversions. Fast, intuitive, and free!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToolboXpress - Unit Converter" />
        <meta
          name="twitter:description"
          content="Convert units easily with ToolboXpress Unit Converter. Switch between different measurement systems for accurate conversions. Fast, intuitive, and free!"
        />

        {/* Canonical URL to specify the preferred version of a page */}
        <link rel="canonical" href={currentUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <main>
        <div className="container mt-5">
          {/* Heading Section */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '2em', color: '#333' }}>Unit Converter</h1>
          <p style={{ fontSize: '1.2em', color: '#555' }}>
         {description}
          </p>
        </div>
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
                  className={`form-control ${error ? 'is-invalid' : ''}`}
                  value={result}
                  readOnly
                />
                {error && <div className="invalid-feedback">{error}</div>}
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
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default UnitConverter;
