import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { convertWordFiles } from 'convert-multiple-files-ul';
import * as path from 'path';
import { saveAs } from 'file-saver';

const WordToPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionSuccess, setConversionSuccess] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setConversionSuccess(false);
  };

  const convertToPdf = async () => {
    try {
      if (!selectedFile) {
        throw new Error('No file selected');
      }

      // Convert Word to PDF using convert-multiple-files-ul
      const outputPath = await convertWordFiles(
        selectedFile.path,
        'pdf',
        path.resolve(__dirname)
      );

      console.log('Conversion successful. Output path:', outputPath);
      setConversionSuccess(true);

      // Fetch the generated PDF Blob
      const pdfBlobResponse = await fetch(outputPath);
      const pdfBlob = await pdfBlobResponse.blob();
      setPdfBlob(pdfBlob);
    } catch (error) {
      console.error('Error during conversion:', error);
      setConversionSuccess(false);
      setPdfBlob(null);
    }
  };

  const handleDownloadClick = () => {
    if (pdfBlob) {
      // Use file-saver to trigger the download
      saveAs(pdfBlob, 'converted.pdf');
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Input field to select a DOCX file */}
        <input
          type="file"
          id="wordFileInput"
          accept=".docx"
          onChange={handleFileChange}
        />
        <button onClick={convertToPdf}>Convert to PDF</button>

        {/* Conditionally render the download button */}
        {conversionSuccess && (
          <button onClick={handleDownloadClick}>Download PDF</button>
        )}
      </main>
      <Footer />
    </>
  );
};

export default WordToPdf;
