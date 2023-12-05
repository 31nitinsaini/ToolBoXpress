import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { encode } from 'plantuml-encoder';
import Typography from '@mui/material/Typography';


const PlantUmlTool = () => {
  const [umlCode, setUmlCode] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleUmlCodeChange = (event) => {
    setUmlCode(event.target.value);
  };

  useEffect(() => {
    const encodedUml = encode(umlCode);
    const url = `http://www.plantuml.com/plantuml/img/${encodedUml}`;
    setImageUrl(url);
  }, [umlCode]);

 

  return (
    <>
      <Helmet>
        <title>Plant UML Tool</title>
        <meta name="description" content="Generate and download Plant UML diagrams easily." />
      </Helmet>

      <Header />

      <main>
       <div className='my-5 container'>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='my-3'>
        <Typography variant="h2">Plant UML Code:</Typography>
          <Typography variant="p">Enter your Plant UML code below to generate a diagram.</Typography>
        </div>
          <textarea
            value={umlCode}
            onChange={handleUmlCodeChange}
            rows="10"
            cols="50"
            placeholder="Enter your Plant UML code here"
            style={{ width: '100%', maxWidth: '600px' }}
            required
          />

          <div style={{ marginTop: '20px' }}>
            <Typography variant="h4">UML Diagram Preview:</Typography>
            <Typography variant="p">Preview of the generated UML diagram:</Typography>
            {imageUrl && <img src={imageUrl} alt="UML Diagram" style={{ maxWidth: '100%' }} />}
          </div>

        </div>
       </div>
      </main>

      <RatingComponent />
      <Footer />
    </>
  );
};

export default PlantUmlTool;
