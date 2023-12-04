import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const TimeCalculator = () => {
  const [time1, setTime1] = useState('00:00');
  const [time2, setTime2] = useState('00:00');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const validateTimeFormat = (time) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
  };

  const addTimes = () => {
    setError(''); // Reset error state
    if (!validateTimeFormat(time1) || !validateTimeFormat(time2)) {
      setError('Invalid time format. Please use HH:mm.');
      return;
    }

    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    const totalHours = hours1 + hours2;
    const totalMinutes = minutes1 + minutes2;

    const adjustedHours = Math.floor(totalMinutes / 60);
    const adjustedMinutes = totalMinutes % 60;

    setResult(`${padZero(totalHours + adjustedHours)}:${padZero(adjustedMinutes)}`);
  };

  const subtractTimes = () => {
    setError(''); // Reset error state
    if (!validateTimeFormat(time1) || !validateTimeFormat(time2)) {
      setError('Invalid time format. Please use HH:mm.');
      return;
    }

    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;

    if (totalMinutes1 < totalMinutes2) {
      setError('Result cannot be negative. Please enter valid times.');
      return;
    }

    const differenceMinutes = totalMinutes1 - totalMinutes2;

    const hours = Math.floor(differenceMinutes / 60);
    const minutes = differenceMinutes % 60;

    setResult(`${padZero(hours)}:${padZero(minutes)}`);
  };

  // Function to pad single-digit numbers with a leading zero
  const padZero = (num) => (num < 10 ? `0${num}` : num);

  return (
    <>
      <Header />
      <main>
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Time Calculator</Typography>
            </Grid>
            <Typography variant="body2" color="textSecondary" paragraph>
Calculate the sum or difference between two times using the Time Calculator. Enter times in the HH:mm format. 
  This tool handles addition and subtraction of hours and minutes, providing accurate results.              </Typography>
            <Grid item xs={6}>
              <TextField
                label="Time 1"
                type="time"
                value={time1}
                onChange={(e) => setTime1(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Time 2"
                type="time"
                value={time2}
                onChange={(e) => setTime2(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={addTimes} fullWidth>
                Add Times
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={subtractTimes} fullWidth>
                Subtract Times
              </Button>
            </Grid>
            {result && (
              <Grid item xs={12}>
                <Typography variant="h6">Result:</Typography>
                <Typography>{result}</Typography>
              </Grid>
            )}
            {error && (
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="error">
                  {error}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default TimeCalculator;
