import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PdfMerger from '../Pages/FileConversionTool/PdfMerger'
import SplitPdf from '../Pages/FileConversionTool/SplitPdf'
import ImageToPdf from '../Pages/FileConversionTool/ImageToPdf'
import ExcelToPdf from '../Pages/FileConversionTool/ExcelToPdf'
import TextToPDF from '../Pages/FileConversionTool/TextToPDF'
const FileConversionRoutes = () => {
  return (
    <Routes>
        <Route path='pdf-merge' element={<PdfMerger/>}/>
        <Route path='pdf-split' element={<SplitPdf/>}/>
        <Route path='image-to-pdf' element={<ImageToPdf/>}/>
        <Route path='excel-to-pdf' element={<ExcelToPdf/>}/>
        <Route path='text-to-pdf' element={<TextToPDF/>}/>
    </Routes>
  )
}

export default FileConversionRoutes