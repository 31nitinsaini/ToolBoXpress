import React from 'react'
import { Routes,Route } from 'react-router-dom'
import WordToPdf from '../Pages/FileConversionTool/WordToPdf'
import ImageResizeTool from '../Pages/ImageManipulation/ImageResizeTool'
import ImageRotateTool from '../Pages/ImageManipulation/ImageRotateTool'
import ImageWatermarkTool from '../Pages/ImageManipulation/ImageWatermarkTool'
import ImageFiltersTool from '../Pages/ImageManipulation/ImageFiltersTool'
import ImageCropTool from '../Pages/ImageManipulation/ImageCropTool'

const ImageManipulationRoutes = () => {
  return (
    <Routes>
        <Route path='image-resize' element={<ImageResizeTool/>}/>
        <Route path='image-rotate' element={<ImageRotateTool/>}/>
        <Route path='image-water-mark' element={<ImageWatermarkTool/>}/>
        <Route path='image-filter' element={<ImageFiltersTool/>}/>
        <Route path='image-crop' element={<ImageCropTool/>}/>
    </Routes>
  )
}

export default ImageManipulationRoutes