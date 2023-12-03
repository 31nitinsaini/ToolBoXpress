import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ImageResizeTool from '../Pages/ImageManipulation/ImageResizeTool'
import ImageRotateTool from '../Pages/ImageManipulation/ImageRotateTool'
import ImageWatermarkTool from '../Pages/ImageManipulation/ImageWatermarkTool'
import ImageFiltersTool from '../Pages/ImageManipulation/ImageFiltersTool'
import ImageCropTool from '../Pages/ImageManipulation/ImageCropTool'
import ImageConversion from '../Pages/ImageManipulation/ImageConversion'

const ImageManipulationRoutes = () => {
  return (
    <Routes>
        <Route path='image-resize' element={<ImageResizeTool/>}/>
        <Route path='image-rotate' element={<ImageRotateTool/>}/>
        <Route path='image-water-mark' element={<ImageWatermarkTool/>}/>
        <Route path='image-filter' element={<ImageFiltersTool/>}/>
        <Route path='image-crop' element={<ImageCropTool/>}/>
        <Route path='image-conversion' element={<ImageConversion/>}/>
    </Routes>
  )
}

export default ImageManipulationRoutes