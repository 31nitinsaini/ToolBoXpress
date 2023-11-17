import React, { useState } from 'react';
import { Grid, Button, TextField, Typography } from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const BasicCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = (value) => {
    setErrorMessage('');

    const lastCharIsOperator = /[+\-*/]$/.test(input);
    const isOperator = /[+\-*/]/.test(value);

    if (lastCharIsOperator && isOperator) {
      // Remove the last operator and append the new one
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  };

  const handleCalculate = () => {
    try {
      if (input === '') {
        setErrorMessage('Enter an expression.');
        return;
      }

      const calculatedResult = eval(input);
      if (isNaN(calculatedResult) || !isFinite(calculatedResult)) {
        setErrorMessage('Invalid expression.');
        setResult('');
      } else {
        setResult(calculatedResult);
      }
    } catch (error) {
      setErrorMessage('Invalid expression.');
      setResult('');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setErrorMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent Enter key press
      handleCalculate();
    }
  };

  const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '+',
  ];

  return (
    <>
      <Header />
      <main className="calculator">
        <Typography variant="h4" gutterBottom>
          Basic Calculator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              className="input-field"
              value={input}
              disabled
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress} // Handle Enter key press
              error={!!errorMessage}
              helperText={errorMessage}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {buttonValues.map((value, index) => (
                <Grid item key={index}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleButtonClick(value)}
                    className={`calculator-button ${isNaN(value) ? 'operator' : ''}`}
                  >
                    {value}
                  </Button>
                </Grid>
              ))}
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  onClick={handleClear}
                >
                  C
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleCalculate}
                  className="calculator-button operator"
                >
                  =
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              className={`input-field ${result ? 'result-active' : ''}`}
              value={result}
              disabled
            />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  );
};

export default BasicCalculator;
