import React from 'react'
import { Routes,Route } from 'react-router-dom'
import WordToPdf from '../Pages/FileConversionTool/WordToPdf'
import PdfMerger from '../Pages/FileConversionTool/PdfMerger'
import SplitPdf from '../Pages/FileConversionTool/SplitPdf'
import ImageToPdf from '../Pages/FileConversionTool/ImageToPdf'

const FileConversionRoutes = () => {
  return (
    <Routes>
        <Route path='word-to-pdf' element={<WordToPdf/>}/>
        <Route path='pdf-merge' element={<PdfMerger/>}/>
        <Route path='pdf-split' element={<SplitPdf/>}/>
        <Route path='image-to-pdf' element={<ImageToPdf/>}/>
    </Routes>
  )
}

export default FileConversionRoutes