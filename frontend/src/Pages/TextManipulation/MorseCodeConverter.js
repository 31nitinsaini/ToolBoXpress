import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';
const MorseCodeConverter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const textToMorse = () => {
    const text = inputText.toUpperCase();
    const morseCodeMap = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
      'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
      'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
      'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
      'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
      'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
      '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
      '0': '-----', ' ': '/'
    };

    const morseCode = text.split('').map(char => {
      return morseCodeMap[char] || char;
    }).join(' ');

    setOutputText(morseCode);
  };

  const morseToText = () => {
    const morseCode = outputText.split(' ');
    const morseCodeMap = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
      'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
      'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
      'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
      'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
      'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
      '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
      '0': '-----', ' ': '/'
    };

    const text = morseCode.map(code => {
      for (const key in morseCodeMap) {
        if (morseCodeMap[key] === code) {
          return key;
        }
      }
      return code;
    }).join('');

    setInputText(text);
  };

  const currentUrl = window.location.href;

  return (
    <>
    <Helmet>
      <title>ToolboXpress - Morse Code Converter</title>
      <meta name="description" content="Convert text to Morse code and vice versa with ToolboXpress Morse Code Converter. Translate messages using the Morse code system. Fast, intuitive, and free!" />
      <meta name="keywords" content="Morse Code Converter, text to Morse code, Morse code translation, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Morse Code Converter" />
      <meta property="og:description" content="Convert text to Morse code and vice versa with ToolboXpress Morse Code Converter. Translate messages using the Morse code system. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Morse Code Converter" />
      <meta name="twitter:description" content="Convert text to Morse code and vice versa with ToolboXpress Morse Code Converter. Translate messages using the Morse code system. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
      <Header />
      <main>
      <div className="container mt-5 mb-5">
        <h2 className="mb-3">Morse Code Converter</h2>
        {/* Description Section */}
<div style={{ marginBottom: '20px' }}>
    <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>
        Convert text to Morse code and vice versa with the ToolboXpress Morse Code Converter.
        Translate messages using the Morse code system easily and efficiently. Simply enter your
        text or Morse code, click the corresponding button, and get instant results. Enhance your
        communication in Morse code or decode Morse messages effortlessly. Fast, intuitive, and free!
    </p>
</div>

        <div className="row">
          <div className="col-md-6">
            <textarea
              rows="4"
              className="form-control mb-3"
              placeholder="Enter text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={textToMorse}>Convert to Morse</button>
          </div>
          <div className="col-md-6">
            <textarea
              rows="4"
              className="form-control mb-3"
              placeholder="Enter Morse code"
              value={outputText}
              onChange={(e) => setOutputText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={morseToText}>Convert to Text</button>
          </div>
        </div>
      </div>
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default MorseCodeConverter;
