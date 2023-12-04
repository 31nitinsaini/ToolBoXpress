import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@mui/material';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
import { Helmet } from 'react-helmet';

const ColorPicker = () => {
  const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };


  return (
    <>
      <Helmet>
        <title>Color Picker - Choose Your Color</title>
        <meta name="description" content="Explore the Color Picker tool to choose and preview colors effortlessly. A user-friendly and interactive way to find the perfect color for your projects." />
      </Helmet>
      <Header />
      <main style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className='container my-5'>
        <h1 style={{ fontSize: '2em', color: '#333' }}>Color Picker</h1>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          The Color Picker tool allows you to choose and preview colors effortlessly. It provides a user-friendly and interactive way to find the perfect color for your projects. Click the button below to open the Color Picker and explore a spectrum of colors.
        </p>
     <center><ChromePicker color={color} onChange={handleColorChange} /></center>
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default ColorPicker;
