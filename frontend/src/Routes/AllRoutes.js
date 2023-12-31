import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import TextManipulationRoutes from './TextManipulationRoutes'
import UtilityRoutes from './UtilityRoutes'
import CalculatorRoutes from './CalculatorRoutes'
import FileConversionRoutes from './FileConversionRoutes'
import ImageManipulationRoutes from './ImageManipulationRoutes'
import CodeToolRoutes from './CodeToolRoutes'
import HashingRoutes from './HashingRoutes'
import BinaryCalcRoutes from './BinaryCalcRoutes'
import NumberBaseRoutes from './NumberBaseRoutes'
import ComputerGraphicsRoutes from './ComputerGraphicsRoutes'
import OperatingSystemAlgorithmsRoutes from './OperatingSystemAlgorithmsRoutes'
import RequestTool from '../Pages/RequestTool'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/request-tool' element={<RequestTool />} />
      <Route path='/text-manipulation/*' element={<TextManipulationRoutes />} />
      <Route path='/utility/*' element={<UtilityRoutes />} />
      <Route path='/MathCalculator/*' element={<CalculatorRoutes />} />
      <Route path='/FileConversionTool/*' element={<FileConversionRoutes />} />
      <Route path='/ImageManipulation/*' element={<ImageManipulationRoutes />} />
      <Route path='/CodingTool/*' element={<CodeToolRoutes />} />
      <Route path='/hashing/*' element={<HashingRoutes />} />
      <Route path='/number-base-converter/*' element={<NumberBaseRoutes />} />
      <Route path='/binary-calculator/*' element={<BinaryCalcRoutes />} />
      <Route path='/computer-graphics/*' element={<ComputerGraphicsRoutes />} />
      <Route path='/operating-system-algo/*' element={<OperatingSystemAlgorithmsRoutes />} />
    </Routes>
  )
};
export default AllRoutes