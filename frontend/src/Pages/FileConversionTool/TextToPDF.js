import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const TextToPDF = () => {
  const [text, setText] = useState('');
  const [margin, setMargin] = useState(10);
  const [padding, setPadding] = useState(10);
  const [border, setBorder] = useState(1);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleMarginChange = (e) => {
    setMargin(parseInt(e.target.value, 10));
  };

  const handlePaddingChange = (e) => {
    setPadding(parseInt(e.target.value, 10));
  };

  const handleBorderChange = (e) => {
    setBorder(parseInt(e.target.value, 10));
  };

  const generatePDF = () => {
    const content = document.getElementById('pdfContent');
  
    const options = {
      margin,
      padding: { top: padding, right: padding, bottom: padding, left: padding },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    const pdf = html2pdf().from(content).set(options).outputPdf();
  
    // Save the PDF to a file
    pdf.save('generated.pdf');
  };
  

  return (
    <>
    <Header/>
    <main>
        
    <div className="container mt-5">
      <h2>Text to PDF Converter</h2>
      <div className="mb-3">
        <label htmlFor="textContent" className="form-label">Text Content:</label>
        <textarea
          id="textContent"
          className="form-control"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text content"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="margin" className="form-label">Margin (mm):</label>
        <input
          type="number"
          id="margin"
          className="form-control"
          value={margin}
          onChange={handleMarginChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="padding" className="form-label">Padding (mm):</label>
        <input
          type="number"
          id="padding"
          className="form-control"
          value={padding}
          onChange={handlePaddingChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="border" className="form-label">Border Width (mm):</label>
        <input
          type="number"
          id="border"
          className="form-control"
          value={border}
          onChange={handleBorderChange}
        />
      </div>
      <button className="btn btn-primary" onClick={generatePDF}>Generate PDF</button>
      <div id="pdfContent" style={{ margin: `${margin}mm`, border: `${border}mm solid black`, padding: `${padding}mm` }}>
        {text}
      </div>
    </div>
    </main>
    <RatingComponent/>
    <Footer/>
    </>
  );
};

export default TextToPDF;
