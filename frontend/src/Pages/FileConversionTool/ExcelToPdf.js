import React, { useRef } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ExcelToPdf = () => {
  const inputRef = useRef();

  const handleConvertToPdf = () => {
    const inputElement = inputRef.current;

    if (!inputElement || !inputElement.files || inputElement.files.length === 0) {
      console.error('Please select an Excel file.');
      return;
    }

    const file = inputElement.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;

      try {
        const workbook = XLSX.read(data, { type: 'binary' });
        convertWorkbookToPdf(workbook);
      } catch (error) {
        console.error('Error converting Excel to PDF:', error);
      }
    };

    reader.readAsBinaryString(file);
  };

  const convertWorkbookToPdf = (workbook) => {
    const pdf = new jsPDF();

    Object.keys(workbook.Sheets).forEach((sheetName, index) => {
      const sheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Create a table from Excel data
      const tableData = excelData.map(row => row.map(String));

      // Set a margin to avoid the invalid arguments error
      const margin = 10;
      pdf.autoTable({
        head: [sheetName], // Table header will be the sheet name
        body: tableData,
        startY: index === 0 ? margin : pdf.previousAutoTable.finalY + margin,
      });

      pdf.addPage();
    });

    pdf.save('converted.pdf');
  };

  return (
    <>
      <Header />
      <main>
        <input type="file" accept=".xlsx" ref={inputRef} />
        <button onClick={handleConvertToPdf}>Convert to PDF</button>
        {/* Add more content or components as needed */}
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default ExcelToPdf;
