import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  IconButton,
} from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import randomstring from 'crypto-random-string';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleGeneratePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberCharset = '0123456789';
    const specialCharset = '!@#$%^&*()_-+=<>?';

    let finalCharset = charset;

    if (includeUppercase) {
      finalCharset += uppercaseCharset;
    }

    if (includeNumbers) {
      finalCharset += numberCharset;
    }

    if (includeSpecialChars) {
      finalCharset += specialCharset;
    }

    const maxLength = 100; // Maximum password length

    const password = randomstring({
      length: Math.min(passwordLength, maxLength), // Ensure it doesn't exceed the max length
      characters: finalCharset,
    });

    setGeneratedPassword(password);
    setIsCopied(false); // Reset the copied state
  };

  return (
    <>
      <Header />
      <main>
        <Container>
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Password Generator
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  label="Password Length (max 100)"
                  value={passwordLength}
                  onChange={(e) => {
                    const newValue = Math.min(100, Math.max(0, parseInt(e.target.value, 10))); // Ensure it's between 0 and 100
                    setPasswordLength(newValue);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={includeUppercase}
                      onChange={() => setIncludeUppercase(!includeUppercase)}
                    />
                  }
                  label="Include Uppercase"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={includeNumbers}
                      onChange={() => setIncludeNumbers(!includeNumbers)}
                    />
                  }
                  label="Include Numbers"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={includeSpecialChars}
                      onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                    />
                  }
                  label="Include Special Characters"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGeneratePassword}
                  disabled={!includeUppercase && !includeNumbers && !includeSpecialChars}
                >
                  Generate Password
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Generated Password"
                  value={generatedPassword}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                {generatedPassword && (
                  <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" color={isCopied ? 'success' : 'textPrimary'}>
                      {isCopied ? 'Copied to clipboard!' : 'Click the button to copy to clipboard'}
                    </Typography>
                    <IconButton
                      color="primary"
                      aria-label="Copy to Clipboard"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedPassword).then(() => {
                          setIsCopied(true);
                        });
                      }}
                    >
                      <FileCopyIcon />
                    </IconButton>
                  </div>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default PasswordGenerator;
