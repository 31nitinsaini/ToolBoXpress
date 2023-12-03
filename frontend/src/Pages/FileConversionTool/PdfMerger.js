import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Rating from 'react-rating';
import RatingComponent from '../../Components/RatingComponent';

const PdfMerger = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [mergedPdf, setMergedPdf] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mergePDFs = async () => {
    try {
      setLoading(true);

      // Load PDF documents
      const pdf1Bytes = await fetch(file1).then((res) => res.arrayBuffer());
      const pdf2Bytes = await fetch(file2).then((res) => res.arrayBuffer());

      const pdf1Doc = await PDFDocument.load(pdf1Bytes);
      const pdf2Doc = await PDFDocument.load(pdf2Bytes);

      // Create a new PDF document
      const mergedPdfDoc = await PDFDocument.create();

      // Add pages from the first document
      const pdf1Pages = await mergedPdfDoc.copyPages(pdf1Doc, pdf1Doc.getPageIndices());
      pdf1Pages.forEach((page) => mergedPdfDoc.addPage(page));

      // Add pages from the second document
      const pdf2Pages = await mergedPdfDoc.copyPages(pdf2Doc, pdf2Doc.getPageIndices());
      pdf2Pages.forEach((page) => mergedPdfDoc.addPage(page));

      // Save the merged PDF
      const mergedPdfBytes = await mergedPdfDoc.save();

      setMergedPdf(new Blob([mergedPdfBytes], { type: 'application/pdf' }));
      setLoading(false);
    } catch (error) {
      console.error('Error merging PDFs:', error);
      setError('Error merging PDFs. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="container mt-5">
        <h1 className="mb-4">PDF Merger</h1>

        <div className="form-group">
          <label htmlFor="file1">Choose PDF 1:</label>
          <input
            type="file"
            className="form-control-file"
            id="file1"
            accept=".pdf"
            onChange={(e) => setFile1(URL.createObjectURL(e.target.files[0]))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="file2">Choose PDF 2:</label>
          <input
            type="file"
            className="form-control-file"
            id="file2"
            accept=".pdf"
            onChange={(e) => setFile2(URL.createObjectURL(e.target.files[0]))}
          />
        </div>

        <button className="btn btn-primary" onClick={mergePDFs} disabled={loading}>
          {loading ? 'Merging...' : 'Merge PDFs'}
        </button>

        {error && <p className="text-danger mt-3">{error}</p>}

        {mergedPdf && (
          <div className="mt-3">
            <a
              href={URL.createObjectURL(mergedPdf)}
              download="merged.pdf"
              className="btn btn-success"
            >
              Download Merged PDF
            </a>
          </div>
        )}
      </main>
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default PdfMerger;
