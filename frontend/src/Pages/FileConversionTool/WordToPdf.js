import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const WordToPdf = () => {
  const [wordFile, setWordFile] = useState(null);
  const [error, setError] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Perform additional file validation checks here

    setWordFile(selectedFile);
  };

 

  return (
    <>
      <Header />
      <main></main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default WordToPdf;
