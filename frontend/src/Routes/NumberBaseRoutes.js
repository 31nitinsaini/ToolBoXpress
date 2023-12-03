import React from 'react'
import { Routes,Route } from 'react-router-dom'
import BinaryToDecimalConverter from '../Pages/NumberBaseConverter/BinaryToDecimalConverter'
import BinaryToHexConverter from '../Pages/NumberBaseConverter/BinaryToHexConverter'
import BinaryToOctalConverter from '../Pages/NumberBaseConverter/BinaryToOctalConverter'
import DecimalToBinaryConverter from '../Pages/NumberBaseConverter/DecimalToBinaryConverter'
import DecimalToOctalConverter from '../Pages/NumberBaseConverter/DecimalToOctalConverter'
import DecimalToHexConverter from '../Pages/NumberBaseConverter/DecimalToHexConverter'
import HexToOctalConverter from '../Pages/NumberBaseConverter/HexToOctalConverter'
import HexToDecimalConverter from '../Pages/NumberBaseConverter/HexToDecimalConverter'
import HexToBinaryConverter from '../Pages/NumberBaseConverter/HexToBinaryConverter'
import OctalToBinaryConverter from '../Pages/NumberBaseConverter/OctalToBinaryConverter'
import OctalToDecimalConverter from '../Pages/NumberBaseConverter/OctalToDecimalConverter'
import OctalToHexConverter from '../Pages/NumberBaseConverter/OctalToHexConverter'

const NumberBaseRoutes = () => {
  return (
    <Routes>
        <Route path='binary-to-decimal' element={<BinaryToDecimalConverter/>}/>
        <Route path='binary-to-hex' element={<BinaryToHexConverter/>}/>
        <Route path='binary-to-octal' element={<BinaryToOctalConverter/>}/>
        <Route path='decimal-to-binary' element={<DecimalToBinaryConverter/>}/>
        <Route path='decimal-to-octal' element={<DecimalToOctalConverter/>}/>
        <Route path='decimal-to-hex' element={<DecimalToHexConverter/>}/>
        <Route path='hex-to-octal' element={<HexToOctalConverter/>}/>
        <Route path='hex-to-decimal' element={<HexToDecimalConverter/>}/>
        <Route path='hex-to-binary' element={<HexToBinaryConverter/>}/>
        <Route path='octal-to-binary' element={<OctalToBinaryConverter/>}/>
        <Route path='octal-to-decimal' element={<OctalToDecimalConverter/>}/>
        <Route path='octal-to-hex' element={<OctalToHexConverter/>}/>
    </Routes>
  )
}

export default NumberBaseRoutes