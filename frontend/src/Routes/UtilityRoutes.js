import React from 'react'
import { Routes,Route } from 'react-router-dom'
import QrCodeGenrator from '../Pages/Utilities/QrCodeGenrator.js'
import BarCodeGenerator from '../Pages/Utilities/BarCodeGenrator.js'
import PasswordGenerator from '../Pages/Utilities/PasswordGenrator.js'


const TextManipulationRoutes = () => {
  return (
    <Routes>
    <Route path='/qr-code-genrator' element={<QrCodeGenrator/>}/>
    <Route path='/bar-code-genrator' element={<BarCodeGenerator/>}/>
    <Route path='/password-genrator' element={<PasswordGenerator/>}/>
  </Routes>
)}

export default TextManipulationRoutes