import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const calculateInterest = (principal, rate, time) => {
  const interest = (principal * rate * time) / (12 * 100); // Assuming interest compounded monthly
  return interest;
};

const COLORS = ['#0088FE', '#FFBB28'];

const FDCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateFD = () => {
    const calculatedInterest = calculateInterest(
      parseFloat(principal),
      parseFloat(rate),
      parseFloat(time)
    );
    setInterest(calculatedInterest);
  };

  const data = [
    { name: 'Principal', value: parseFloat(principal) },
    { name: 'Interest', value: interest ? interest : 0 },
  ];

  return (
    <>
      <Helmet>
        <title>FD Calculator - Calculate Fixed Deposit Interest</title>
        <meta
          name="description"
          content="Calculate the interest earned on your Fixed Deposit (FD) with this FD Calculator. Input the principal amount, interest rate, and time to get accurate FD interest calculations."
        />
        <meta
          name="keywords"
          content="FD Calculator, Fixed Deposit Calculator, FD Interest, Interest Rate, Financial Calculator"
        />
      </Helmet>
      <Header />
      <main>
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
        <Typography variant="h5" gutterBottom>
              FD Calculator
            </Typography>
            <Typography variant="body1" gutterBottom>
            Calculate the interest earned on your Fixed Deposit (FD) with this FD Calculator. Input the principal amount, interest rate, and time to get accurate FD interest calculations.
            </Typography>
          <Paper elevation={3} style={{ padding: '20px' }}>
           
            <Grid container spacing={2}>
            <Grid item xs={12}>
  <TextField
    label="Principal Amount"
    type="number"
    fullWidth
    variant="outlined"
    value={principal}
    onChange={(e) => {
      const value = parseFloat(e.target.value);
      if (e.target.value === '' || (!isNaN(value) && value >= 0)) {
        setPrincipal(value);
      }
    }}
  />
</Grid>

<Grid item xs={12}>
  <TextField
    label="Interest Rate (%)"
    type="number"
    fullWidth
    variant="outlined"
    value={rate}
    onChange={(e) => {
      const value = parseFloat(e.target.value);
      if (e.target.value === '' || (!isNaN(value) && value >= 0)) {
        setRate(value);
      }
    }}
  />
</Grid>

<Grid item xs={12}>
  <TextField
    label="Time (months)"
    type="number"
    fullWidth
    variant="outlined"
    value={time}
    onChange={(e) => {
      const value = parseFloat(e.target.value);
      if (e.target.value === '' || (!isNaN(value) && value >= 0)) {
        setTime(value);
      }
    }}
  />
</Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={calculateFD}>
                  Calculate FD
                </Button>
              </Grid>
            </Grid>
            {interest !== null && (
              <>
                <Typography variant="h6" style={{ marginTop: '16px' }}>
                  Interest Earned: {interest.toFixed(2)}
                </Typography>
                <PieChart width={400} height={200}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </>
            )}
          </Paper>
        </Container>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default FDCalculator;
