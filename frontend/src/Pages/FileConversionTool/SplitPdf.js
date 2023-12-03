import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const SplitPdf = () => {
  const [file, setFile] = useState(null);
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');
  const [splitPdf, setSplitPdf] = useState(null);
  const [error, setError] = useState(null);

  const pdfPreviewRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
const splitPDF = async () => {
    try {
      setError(null);
  
      if (!file) {
        setError('Please choose a PDF file.');
        return;
      }
  
      const pdfBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);
  
      const start = parseInt(startPage, 10) - 1; // Adjust for 0-based index
      const end = parseInt(endPage, 10) - 1; // Adjust for 0-based index
  
      console.log(start);
      console.log(end);
  
      if (isNaN(start) || isNaN(end) || start > end || start < 0 || end >= pdfDoc.getPageCount()) {
        setError('Invalid page range');
        return;
      }
  
      const splitPdfDoc = await PDFDocument.create();
      const copiedPages = await splitPdfDoc.copyPages(pdfDoc, Array.from({ length: end - start + 1 }, (_, i) => start + i));
  
      copiedPages.forEach((page) => splitPdfDoc.addPage(page));
      const splitPdfBytes = await splitPdfDoc.save();
  
      setSplitPdf(new Blob([splitPdfBytes], { type: 'application/pdf' }));
  
      // Load the split PDF into the preview
      if (pdfPreviewRef.current) {
        pdfPreviewRef.current.src = URL.createObjectURL(new Blob([splitPdfBytes], { type: 'application/pdf' }));
      }
    } catch (error) {
      console.error('Error splitting PDF:', error);
      setError('Error splitting PDF. Please make sure the file is a valid PDF and try again.');
    }
  };
 

  return (
    <>
      <Header />
      <main className="container mt-5">
        <h1 className="mb-4">PDF Splitter</h1>

        <div className="form-group">
          <label htmlFor="pdfFile">Choose PDF File:</label>
          <input
            type="file"
            className="form-control-file"
            id="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="startPage">Start Page:</label>
            <input
              type="number"
              className="form-control"
              id="startPage"
              value={startPage}
              onChange={(e) => setStartPage(e.target.value)}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="endPage">End Page:</label>
            <input
              type="number"
              className="form-control"
              id="endPage"
              value={endPage}
              onChange={(e) => setEndPage(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={splitPDF}>
          Split PDF
        </button>

        {error && <p className="text-danger mt-3">{error}</p>}


        {splitPdf && (
          <div className="mt-4">
            <h4>PDF Preview</h4>
            <iframe
              ref={pdfPreviewRef}
              title="PDF Preview"
              width="100%"
              height="500px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default SplitPdf;
