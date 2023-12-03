import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const calculateRD = (monthlyDeposit, rate, time) => {
  const n = time;
  const r = rate / (12 * 100); // Monthly interest rate
  const numerator = monthlyDeposit * (Math.pow(1 + r, n) - 1);
  const denominator = r;
  const maturityAmount = numerator / denominator;
  return maturityAmount.toFixed(2);
};

const COLORS = ['#0088FE', '#FFBB28'];

const RDCalculator = () => {
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateRDAmount = () => {
    const calculatedMaturityAmount = calculateRD(
      parseFloat(monthlyDeposit),
      parseFloat(rate),
      parseFloat(time)
    );
    setMaturityAmount(calculatedMaturityAmount);
  };

  const totalInvested = monthlyDeposit * time;

  const data = [
    { name: 'Total Invested', value: totalInvested },
    { name: 'Maturity Amount', value: maturityAmount ? parseFloat(maturityAmount) : 0 },
  ];

  return (
    <>
    <Header/>
    <main>
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          RD Calculator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Monthly Deposit"
              type="number"
              fullWidth
              variant="outlined"
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Interest Rate (%)"
              type="number"
              fullWidth
              variant="outlined"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Time (months)"
              type="number"
              fullWidth
              variant="outlined"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={calculateRDAmount}>
              Calculate RD
            </Button>
          </Grid>
        </Grid>
        {maturityAmount !== null && (
          <>
            <Typography variant="h6" style={{ marginTop: '16px' }}>
              Maturity Amount: {maturityAmount}
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
    <RatingComponent/>
    <Footer/>
    </>
  );
};

export default RDCalculator;
