import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextareaAutosize,
  Button,
  Grid,
  Select,
  MenuItem,
  CircularProgress,
  Slider,
} from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const TextToSpeech = () => {
  const [inputText, setInputText] = useState('');
  const [audioBlob, setAudioBlob] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [speechRate, setSpeechRate] = useState(1); // Speech rate (speed)
  const [pitch, setPitch] = useState(1); // Pitch

  useEffect(() => {
    const fetchVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0] || null);
    };

    fetchVoices();
    window.speechSynthesis.addEventListener('voiceschanged', fetchVoices);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', fetchVoices);
    };
  }, []);

  const handleTextToSpeech = async () => {
    setIsLoading(true);

    try {
      const utterance = new SpeechSynthesisUtterance(inputText);
      utterance.lang = 'en-US';

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.rate = speechRate; // Set speech rate
      utterance.pitch = pitch; // Set pitch

      const audioPromise = new Promise((resolve) => {
        utterance.onstart = () => {
          setIsPlaying(true);
        };

        utterance.onend = () => {
          setIsLoading(false);
          setIsPlaying(false);
          resolve();
        };
      });

      window.speechSynthesis.speak(utterance);

      await audioPromise;

      // Capture the audio from the SpeechSynthesisUtterance object
      const audioBlob = new Blob([new Uint8Array(utterance.audioBuffer)], {
        type: 'audio/wav', // Change the type to match your audio format
      });

      setAudioBlob(audioBlob);
      setAudioLoaded(true);
    } catch (e) {
      console.error('An error occurred while generating the audio:', e);
      setIsLoading(false);
      setError('An error occurred while generating the audio.');
    }
  };

  const clearTextAndAudio = () => {
    setInputText('');
    setAudioBlob(null);
    setIsPlaying(false);
    setIsLoading(false);
    setAudioLoaded(false);
    setError(null);
  };

  const handleVoiceChange = (event) => {
    const selectedVoiceIndex = event.target.value;
    setSelectedVoice(voices[selectedVoiceIndex]);
  };

  return (
    <>
      <Header />
      <main>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Text to Speech
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div>
                <TextareaAutosize
                  rowsMin={5}
                  placeholder="Enter text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  style={{
                    width: '100%',
                    minHeight: '200px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    marginBottom: '20px',
                  }}
                />
                <Select
                  value={voices.indexOf(selectedVoice)}
                  onChange={handleVoiceChange}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                  disabled={isLoading}
                >
                  {voices.map((voice, index) => (
                    <MenuItem key={index} value={index}>
                      {voice.name}
                    </MenuItem>
                  ))}
                </Select>
                <Typography variant="subtitle1" gutterBottom>
                  Speech Rate: {speechRate.toFixed(2)}x
                </Typography>
                <Slider
                  value={speechRate}
                  min={0.5}
                  max={2}
                  step={0.1}
                  onChange={(e, newValue) => setSpeechRate(newValue)}
                  disabled={isLoading}
                />
                <Typography variant="subtitle1" gutterBottom>
                  Pitch: {pitch.toFixed(2)}
                </Typography>
                <Slider
                  value={pitch}
                  min={0.5}
                  max={2}
                  step={0.1}
                  onChange={(e, newValue) => setPitch(newValue)}
                  disabled={isLoading}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                style={{
                  padding: '10px 20px',
                  borderRadius: '5px',
                  marginRight: '10px',
                }}
                onClick={handleTextToSpeech}
                disabled={isLoading || !selectedVoice}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Text to Speech'}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  padding: '10px 20px',
                  borderRadius: '5px',
                  marginRight: '10px',
                }}
                onClick={clearTextAndAudio}
              >
                Clear
              </Button>
              {audioLoaded && audioBlob && (
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: '10px',
                    borderRadius: '5px',
                    marginRight: '10px',
                  }}
                  onClick={handleTextToSpeech} // Add a replay button
                >
                  Replay
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default TextToSpeech;
 