import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

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
  <Header/>
  <main>
  <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          FD Calculator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Principal Amount"
              type="number"
              fullWidth
              variant="outlined"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
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
  <RatingComponent/>
  <Footer/>
  </>
  );
};

export default FDCalculator;
