import React from 'react'
import { Routes,Route } from 'react-router-dom'
import QrCodeGenrator from '../Pages/Utilities/QrCodeGenrator.js'
import BarCodeGenerator from '../Pages/Utilities/BarCodeGenrator.js'
import PasswordGenerator from '../Pages/Utilities/PasswordGenrator.js'
import ColorPicker from '../Pages/Utilities/ColorPicker.js'
import BmiCalculator from '../Pages/Utilities/BmiCalculator.js'
import RDCalculator from '../Pages/Utilities/RDCalculator.js'
import FDCalculator from '../Pages/Utilities/FDCalculator.js'


const TextManipulationRoutes = () => {
  return (
    <Routes>
    <Route path='/qr-code-genrator' element={<QrCodeGenrator/>}/>
    <Route path='/bar-code-genrator' element={<BarCodeGenerator/>}/>
    <Route path='/password-genrator' element={<PasswordGenerator/>}/>
    <Route path='/color-picker' element={<ColorPicker/>}/>
    <Route path='/bmi-calculator' element={<BmiCalculator/>}/>
    <Route path='/rd-calculator' element={<RDCalculator/>}/>
    <Route path='/fd-calculator' element={<FDCalculator/>}/>
  </Routes>
)}

export default TextManipulationRoutes