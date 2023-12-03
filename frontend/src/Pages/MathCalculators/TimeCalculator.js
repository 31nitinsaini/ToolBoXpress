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

  const addTimes = () => {
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    const totalHours = hours1 + hours2;
    const totalMinutes = minutes1 + minutes2;

    const adjustedHours = Math.floor(totalMinutes / 60);
    const adjustedMinutes = totalMinutes % 60;

    setResult(`${padZero(totalHours + adjustedHours)}:${padZero(adjustedMinutes)}`);
  };

  const subtractTimes = () => {
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;

    const differenceMinutes = totalMinutes1 - totalMinutes2;

    const hours = Math.floor(differenceMinutes / 60);
    const minutes = differenceMinutes % 60;

    setResult(`${padZero(hours)}:${padZero(minutes)}`);
  };

  // Function to pad single-digit numbers with a leading zero
  const padZero = (num) => (num < 10 ? `0${num}` : num);

  return (
 <>
 <Header/>
 <main>
 <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Time Calculator</Typography>
        </Grid>
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
      </Grid>
    </Container>
 </main>
 <RatingComponent/>
 <Footer/>
 </>
  );
};

export default TimeCalculator;
