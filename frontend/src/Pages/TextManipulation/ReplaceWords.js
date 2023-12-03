import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextareaAutosize,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const ReplaceWords = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [wordToReplace, setWordToReplace] = useState('');
  const [replacementWord, setReplacementWord] = useState('');
  const [replaceType, setReplaceType] = useState('replace-all');
  const [occurrencesToReplace, setOccurrencesToReplace] = useState(1);
  const [caseSensitive, setCaseSensitive] = useState(false); // Track case sensitivity

  const handleReplaceWords = () => {
    let replacedText;
    const flags = caseSensitive ? 'g' : 'gi'; // Use 'g' for global, 'i' for case insensitive
    if (replaceType === 'replace-all') {
      replacedText = inputText.replace(new RegExp(wordToReplace, flags), replacementWord);
    } else if (replaceType === 'replace-particular') {
      const regex = new RegExp(wordToReplace, flags);
      let count = 0;
      replacedText = inputText.replace(regex, (match) => {
        count++;
        if (count <= occurrencesToReplace) {
          return replacementWord;
        } else {
          return match;
        }
      });
    }
    setOutputText(replacedText);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    setIsCopied(true);
  };

  const setInputTextExample = (exampleText) => {
    setInputText(exampleText);
    setOutputText('');
  };

  const currentUrl = window.location.href;

  return (
    <>
       (
    <Helmet>
      <title>ToolboXpress - Replace Word</title>
      <meta name="description" content="Replace words in your text with ToolboXpress Replace Word tool. Quickly substitute specific words or phrases. Fast, intuitive, and free!" />
      <meta name="keywords" content="Replace word, text replacement, word substitution, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Replace Word" />
      <meta property="og:description" content="Replace words in your text with ToolboXpress Replace Word tool. Quickly substitute specific words or phrases. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Replace Word" />
      <meta name="twitter:description" content="Replace words in your text with ToolboXpress Replace Word tool. Quickly substitute specific words or phrases. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
      <Header />
      <main>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Replace Words
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <ToolArea
                inputText={inputText}
                setInputText={setInputText}
                outputText={outputText}
                isCopied={isCopied}
                handleReplaceWords={handleReplaceWords}
                handleCopyToClipboard={handleCopyToClipboard}
                wordToReplace={wordToReplace}
                setWordToReplace={setWordToReplace}
                replacementWord={replacementWord}
                setReplacementWord={setReplacementWord}
                replaceType={replaceType}
                setReplaceType={setReplaceType}
                occurrencesToReplace={occurrencesToReplace}
                setOccurrencesToReplace={setOccurrencesToReplace}
                caseSensitive={caseSensitive}
                setCaseSensitive={setCaseSensitive}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <ExampleArea setInputTextExample={setInputTextExample} />
            </Grid>
          </Grid>
        </Container>
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

const ToolArea = ({
  inputText,
  setInputText,
  outputText,
  isCopied,
  handleReplaceWords,
  handleCopyToClipboard,
  wordToReplace,
  setWordToReplace,
  replacementWord,
  setReplacementWord,
  replaceType,
  setReplaceType,
  occurrencesToReplace,
  setOccurrencesToReplace,
  caseSensitive,
  setCaseSensitive,
}) => {
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const isTextareaEmpty = inputText.trim() === '';

  const handleScroll = (e) => {
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
      setScrollDisabled(true);
    } else {
      setScrollDisabled(false);
    }
  };

  const handleReplaceTypeChange = (event) => {
    setReplaceType(event.target.value);
  };

  const handleOccurrencesToReplaceChange = (event) => {
    setOccurrencesToReplace(Number(event.target.value));
  };

  const handleCaseSensitiveChange = (event) => {
    setCaseSensitive(event.target.checked);
  };

  return (
    <div>
      <div
        onScroll={handleScroll}
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          overflowY: isTextareaEmpty ? 'hidden' : 'scroll',
          padding: '10px',
          marginBottom: '20px',
        }}
      >
        <TextareaAutosize
          rowsMin={5}
          placeholder="Enter text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            width: '100%',
            minHeight: '100%',
            border: 'none',
            outline: 'none',
            resize: 'none',
            background: 'transparent',
            overflow: scrollDisabled ? 'hidden' : 'auto',
            padding: '5px',
          }}
        />
      </div>
      <TextField
        label="Word to Replace"
        fullWidth
        value={wordToReplace}
        onChange={(e) => setWordToReplace(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Replacement Word"
        fullWidth
        value={replacementWord}
        onChange={(e) => setReplacementWord(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <RadioGroup
        name="replaceType"
        value={replaceType}
        onChange={handleReplaceTypeChange}
        style={{ marginBottom: '10px' }}
      >
        <FormControlLabel
          value="replace-all"
          control={<Radio color="primary" />}
          label="Replace All Occurrences"
        />
        <FormControlLabel
          value="replace-particular"
          control={<Radio color="primary" />}
          label="Replace a Specific Number of Occurrences"
        />
      </RadioGroup>
      {replaceType === 'replace-particular' && (
        <TextField
          label="Number of Occurrences to Replace"
          fullWidth
          type="number"
          value={occurrencesToReplace}
          onChange={handleOccurrencesToReplaceChange}
          style={{ marginBottom: '10px' }}
        />
      )}
      <FormControlLabel
        control={<Checkbox color="primary" checked={caseSensitive} onChange={handleCaseSensitiveChange} />}
        label="Case Sensitive"
        style={{ marginBottom: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}
        onClick={handleReplaceWords}
      >
        Replace Words
      </Button>
      {outputText && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="h5">Result:</Typography>
          <div
            style={{
              width: '100%',
              height: '200px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              overflowY: 'auto',
              padding: '10px',
              marginBottom: '20px',
            }}
          >
            <TextareaAutosize
              rowsMin={5}
              value={outputText}
              readOnly
              style={{
                width: '100%',
                minHeight: '100%',
                border: 'none',
                outline: 'none',
                resize: 'none',
                background: 'transparent',
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px' }}
            onClick={handleCopyToClipboard}
            disabled={isCopied}
          >
            {isCopied ? 'Copied!' : 'Copy to Clipboard'}
          </Button>
        </div>
      )}
    </div>
  );
};

const ExampleArea = ({ setInputTextExample }) => {
  const exampleTexts = [
    {
      input: 'Replace "apple" with "banana" in this sentence. This apple is delicious!',
      output: 'Replace "apple" with "banana" in this sentence. This banana is delicious!',
    },
    {
      input: 'The quick brown fox jumps over the lazy dog.',
      output: 'The quick brown fox jumps over the lazy dog.',
    },
    {
      input: 'Replace all occurrences of "cat" with "dog" in this cat-themed story. The cat was cute, and the other cat was even cuter.',
      output: 'Replace all occurrences of "cat" with "dog" in this cat-themed story. The dog was cute, and the other dog was even cuter.',
    },
    {
      input: 'This is a sample text where we will replace a particular word. Replace the first "replace" with "substitute".',
      output: 'This is a sample text where we will replace a particular word. Substitute the first "replace" with "substitute".',
    },
  ];


  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Example
      </Typography>
      {exampleTexts.map((example, index) => (
        <Card key={index} style={{ marginBottom: '16px', width: '100%' }}>
          <CardContent>
            <Typography variant="h6">Input:</Typography>
            <Typography variant="body1">{example.input}</Typography>
            <Typography variant="h6" style={{ marginTop: '16px' }}>
              Output:
            </Typography>
            <Typography variant="body1">{example.output}</Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px' }}
              onClick={() => setInputTextExample(example.input)}
            >
              Load Example
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReplaceWords;
