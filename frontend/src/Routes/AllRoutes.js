import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import TextManipulationRoutes from './TextManipulationRoutes'
import UtilityRoutes from './UtilityRoutes'
import CalculatorRoutes from './CalculatorRoutes'
import FileConversionRoutes from './FileConversionRoutes'
const AllRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/text-manipulation/*' element={<TextManipulationRoutes/>}/>
        <Route path='/utility/*' element={<UtilityRoutes/>}/>
        <Route path='/MathCalculator/*' element={<CalculatorRoutes/>}/>
        <Route path='/FileConversionTool/*' element={<FileConversionRoutes/>}/>
      </Routes>
  )
}

export default AllRoutes