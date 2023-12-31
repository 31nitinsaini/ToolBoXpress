import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Typography,
  TextareaAutosize,
  Button,
  Card,
  CardContent,
  Grid,
  Box,
} from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const TextCount = () => {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [readingTimeSeconds, setReadingTimeSeconds] = useState(0);
  const [readingTimeMinutes, setReadingTimeMinutes] = useState(0);
  const [readingTimeHours, setReadingTimeHours] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const textAreaRef = useRef(null);

  const handleCountWords = () => {
    const words = inputText.trim().split(/\s+/);
    setWordCount(words.length);

    // Count characters
    setCharacterCount(inputText.length);

    // Estimate reading time (assuming 200 words per minute)
    const wordsPerMinute = 200;
    const minutes = words.length / wordsPerMinute;
    const seconds = minutes * 60;
    setReadingTimeSeconds(seconds.toFixed(2));
    setReadingTimeMinutes(minutes.toFixed(2));
    const hours = minutes / 60;
    setReadingTimeHours(hours.toFixed(2));

    // Count sentences (simple count based on periods)
    const sentences = inputText.split('.').filter((sentence) => sentence.trim() !== '');
    setSentenceCount(sentences.length);

    // Count paragraphs (splitting by empty lines)
    const paragraphs = inputText.split('\n\n').filter((paragraph) => paragraph.trim() !== '');
    setParagraphCount(paragraphs.length);
  };

  const setInputTextExample = (exampleText) => {
    setInputText(exampleText);
    setWordCount(0);
    setCharacterCount(0);
    setReadingTimeSeconds(0);
    setReadingTimeMinutes(0);
    setReadingTimeHours(0);
    setSentenceCount(0);
    setParagraphCount(0);
  };

  const clearInputText = () => {
    setInputText('');
    setWordCount(0);
    setCharacterCount(0);
    setReadingTimeSeconds(0);
    setReadingTimeMinutes(0);
    setReadingTimeHours(0);
    setSentenceCount(0);
    setParagraphCount(0);
  };

  const handleScroll = () => {
    const textArea = textAreaRef.current;
    if (textArea.scrollTop + textArea.clientHeight >= textArea.scrollHeight) {
      textArea.style.overflowY = 'hidden';
    } else {
      textArea.style.overflowY = 'scroll';
    }
  };

  const examples = [
    {
      input: 'This is an example sentence.',
      output: {
        wordCount: 5,
        characterCount: 28,
        readingTimeSeconds: 1.50,
        readingTimeMinutes: 0.03,
        readingTimeHours: 0.00,
        sentenceCount: 1,
        paragraphCount: 1,
      },
    },
    {
      input: 'Count the number of words in this text.',
      output: {
        wordCount: 8,
        characterCount: 39,
        readingTimeSeconds: 2.40,
        readingTimeMinutes: 0.04,
        readingTimeHours: 0.00,
        sentenceCount: 1,
        paragraphCount: 1,
      },
    },
    {
      input: 'Word count example',
      output: {
        wordCount: 3,
        characterCount: 18,
        readingTimeSeconds: 0.90,
        readingTimeMinutes: 0.01,
        readingTimeHours: 0.00,
        sentenceCount: 1,
        paragraphCount: 1,
      },
    },
  ];
  const currentUrl = window.location.href;

  return (
    <>
       <Helmet>
      <title>ToolboXpress - Text Count</title>
      <meta name="description" content="Count words, characters, and lines in your text with ToolboXpress Text Count tool. Analyze the length of your content quickly. Fast, intuitive, and free!" />
      <meta name="keywords" content="Text count, word count, character count, line count, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Text Count" />
      <meta property="og:description" content="Count words, characters, and lines in your text with ToolboXpress Text Count tool. Analyze the length of your content quickly. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Text Count" />
      <meta name="twitter:description" content="Count words, characters, and lines in your text with ToolboXpress Text Count tool. Analyze the length of your content quickly. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
      
      <Header />
      <main>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Text Count
          </Typography>
          {/* Description Section */}
<div style={{ marginBottom: '20px' }}>
    <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>
        Count words, characters, and lines in your text with ToolboXpress Text Count tool.
        Analyze the length of your content quickly. Simply enter your text, click "Count Text,"
        and get detailed statistics, including word count, character count, reading time,
        sentence count, and paragraph count. Enhance your writing and gain insights into your text
        effortlessly. Fast, intuitive, and free!
    </p>
</div>

          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div>
                <TextareaAutosize
                  ref={textAreaRef}
                  rowsMin={5}
                  placeholder="Enter text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onScroll={handleScroll}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    minHeight: '200px',
                    maxHeight: '200px',
                    marginBottom: '20px',
                    overflowY:
                      inputText && inputText.length > 200 ? 'scroll' : 'hidden',
                  }}
                />
              </div>
              <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    marginRight: '10px',
                    marginBottom: '10px',
                  }}
                  onClick={handleCountWords}
                >
                  Count Text
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    marginRight: '10px',
                    marginBottom: '10px',
                  }}
                  onClick={clearInputText}
                >
                  Clear Text
                </Button>
              </Box>
              {wordCount > 0 && (
                <div
                  style={{
                    marginTop: '20px',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                >
                  <Typography variant="h6" style={{ marginBottom: '5px' }}>
                    Word Count: {wordCount}
                  </Typography>
                  <Typography variant="h6" style={{ marginBottom: '5px' }}>
                    Character Count: {characterCount}
                  </Typography>
                  <Typography variant="h6" style={{ marginBottom: '5px' }}>
                    Reading Time (seconds): {readingTimeSeconds} seconds
                  </Typography>
                  <Typography variant="h6" style={{ marginBottom: '5px' }}>
                    Reading Time (minutes): {readingTimeMinutes} minutes
                  </Typography>
                  <Typography variant="h6" style={{ marginBottom: '5px' }}>
                    Reading Time (hours): {readingTimeHours} hours
                  </Typography>
                  <Typography variant="h6" style={{ marginBottom: '5px' }}>
                    Sentence Count: {sentenceCount}
                  </Typography>
                  <Typography variant="h6" style={{ marginBottom: '5px' }}>
                    Paragraph Count: {paragraphCount}
                  </Typography>
                </div>
              )}
            </Grid>
            <Grid item xs={12} md={8}>
              <ExampleArea
                examples={examples}
                setInputTextExample={setInputTextExample}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

const ExampleArea = ({ examples, setInputTextExample }) => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Examples
      </Typography>
      {examples.map((example, index) => (
        <Card key={index} style={{ marginBottom: '16px', width: '100%' }}>
          <CardContent>
            <Typography variant="h6">Input:</Typography>
            <Typography variant="body1">{example.input}</Typography>
            <Typography variant="h6" style={{ marginTop: '10px' }}>
              Output:
            </Typography>
            <Typography variant="body1">
              Word Count: {example.output.wordCount}
            </Typography>
            <Typography variant="body1">
              Character Count: {example.output.characterCount}
            </Typography>
            <Typography variant="body1">
              Reading Time (seconds): {example.output.readingTimeSeconds} seconds
            </Typography>
            <Typography variant="body1">
              Reading Time (minutes): {example.output.readingTimeMinutes} minutes
            </Typography>
            <Typography variant="body1">
              Reading Time (hours): {example.output.readingTimeHours} hours
            </Typography>
            <Typography variant="body1">
              Sentence Count: {example.output.sentenceCount}
            </Typography>
            <Typography variant="body1">
              Paragraph Count: {example.output.paragraphCount}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                borderRadius: '5px',
              }}
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

export default TextCount;