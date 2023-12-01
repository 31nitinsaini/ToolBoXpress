import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

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

  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        <h2 className="mb-3">Morse Code Converter</h2>
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
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default MorseCodeConverter;
