import React from 'react'
import { Routes,Route } from 'react-router-dom'
import WordToPdf from '../Pages/FileConversionTool/WordToPdf'

const FileConversionRoutes = () => {
  return (
    <Routes>
        <Route path='word-to-pdf' element={<WordToPdf/>}/>
    </Routes>
  )
}

export default FileConversionRoutes