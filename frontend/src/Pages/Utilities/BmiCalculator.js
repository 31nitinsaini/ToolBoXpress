import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convert height to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(2)); // Round to 2 decimal places
  };

  const getBmiCategory = () => {
    if (bmiResult === null) {
      return '';
    }

    if (bmiResult < 18.5) {
      return 'Underweight';
    } else if (bmiResult >= 18.5 && bmiResult < 24.9) {
      return 'Normal Weight';
    } else if (bmiResult >= 25 && bmiResult < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
   <>
   <Header/>
   <main>
   <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          BMI Calculator
        </Typography>
        <TextField
          label="Height (cm)"
          type="number"
          fullWidth
          margin="normal"
          variant="outlined"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <TextField
          label="Weight (kg)"
          type="number"
          fullWidth
          margin="normal"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={calculateBMI}>
          Calculate BMI
        </Button>
        {bmiResult !== null && (
          <Box mt={3}>
            <Typography variant="h6" align="center">
              BMI Result: {bmiResult}
            </Typography>
            <Typography variant="subtitle1" align="center">
              Category: {getBmiCategory()}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
   </main>
   <RatingComponent/>
   <Footer/>
   </>
  );
};

export default BMICalculator;
