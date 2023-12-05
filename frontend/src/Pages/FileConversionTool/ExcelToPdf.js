import React, { useRef } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Typography } from '@mui/material';

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
    const pdf = new jsPDF('l'); // Set to landscape mode

    Object.keys(workbook.Sheets).forEach((sheetName, index) => {
      const sheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Filter out empty rows
      const filteredData = excelData.filter(row => row.some(cell => cell !== undefined && cell !== null && cell !== ''));

      // Create a table from filtered Excel data
      const tableData = filteredData.map(row => row.map(String));

      // Set a margin to avoid the invalid arguments error
      const margin = 10;

      // Check if the content is not empty before adding a new page
      if (tableData.length > 0) {
        // Check if the content can fit on one page
        const canFitOnOnePage = pdf.internal.pageSize.height - (pdf.previousAutoTable.finalY + margin) > 0;

        if (!canFitOnOnePage && index !== 0) {
          pdf.addPage();
        }

        // Define column styles if needed
        const columnStyles = {
          // Example: 'columnIndex': { fontStyle: 'italic' }
        };

        pdf.autoTable({
          head: [], // Empty header to remove sheet name
          body: tableData,
          startY: index === 0 ? margin : pdf.previousAutoTable.finalY + margin,
          styles: {
            overflow: 'linebreak',
            columnWidth: 'wrap',
          },
          columnStyles,
          margin: { top: 15, right: 10, bottom: 10, left: 10 },
          theme: 'grid', // Add borders
        });
      }
    });

    pdf.save('converted.pdf');
  };

  return (
    <>
      <Header />
      <main>
        <div className="my-5 container">
         <center>
         <Typography variant="h4" gutterBottom>
            ToolboXpress Excel to PDF Converter
          </Typography>
          <p className="mb-4">
            Convert Excel data to PDF with ToolboXpress Excel to PDF Converter.
            This user-friendly tool allows you to easily convert your Excel sheets to PDF format.
            Fast, intuitive, and free! Simply select an Excel file, click the "Convert to PDF" button,
            and download the converted PDF file.
          </p>
         </center>
          <div className='form-group'>
            <input type="file" className="form-control" accept=".xlsx" ref={inputRef} />
          </div>
          <button className="btn btn-primary" onClick={handleConvertToPdf}>
            Convert Excel to PDF
          </button>
          {/* Add more content or components as needed */}
        </div>
        <RatingComponent />
      </main>
      <Footer />
    </>
  );
};

export default ExcelToPdf;
