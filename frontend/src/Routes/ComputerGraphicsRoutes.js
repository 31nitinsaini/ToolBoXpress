import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DDAAlgorithmTable from '../Pages/ComputerGraphicsTool/DDAAlgorithmTable'
import BresenhamAlgorithmTable from '../Pages/ComputerGraphicsTool/BresenhamAlgorithmTable'
import BresenhamCircleAlgorithm from '../Pages/ComputerGraphicsTool/BresenhamCircleAlgorithm'
import CohenSutherlandClipping from '../Pages/ComputerGraphicsTool/CohenSutherlandLineClippingAlgorithm'
import CyrusBeckClippingTool from '../Pages/ComputerGraphicsTool/CyrusBeckLineClipingAlgorithm'
const ComputerGraphicsRoutes = () => {
  return (
    <Routes>
        <Route path='dda' element={<DDAAlgorithmTable/>}/>
        <Route path='bresenham-line-algorithm' element={<BresenhamAlgorithmTable/>}/>
        <Route path='bresenham-circle-algorithm' element={<BresenhamCircleAlgorithm/>}/>
        <Route path='sutherland-line-cliping-algorithm' element={<CohenSutherlandClipping/>}/>
        <Route path='cyrus-beck-line-cliping-algorithm' element={<CyrusBeckClippingTool/>}/>
    </Routes>
  )
}

export default ComputerGraphicsRoutes