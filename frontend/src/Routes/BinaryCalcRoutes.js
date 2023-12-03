import React from 'react'
import { Routes,Route } from 'react-router-dom'
import BinarySumCalculator from '../Pages/BinaryCalculator/BinarySumCalculator'
import BinaryProductCalculator from '../Pages/BinaryCalculator/BinaryProductCalculator'
import BinaryBitwiseANDCalculator from '../Pages/BinaryCalculator/BinaryBitwiseANDCalculator'
import BinaryBitwiseNANDCalculator from '../Pages/BinaryCalculator/BinaryBitwiseNANDCalculator'
import BinaryBitwiseORCalculator from '../Pages/BinaryCalculator/BinaryBitwiseORCalculator'
import BinaryBitwiseXORCalculator from '../Pages/BinaryCalculator/BinaryBitwiseXORCalculator'
import BinaryBitwiseNORCalculator from '../Pages/BinaryCalculator/BinaryBitwiseNORCalculator'
import BinaryBitwiseXNORCalculator from '../Pages/BinaryCalculator/BinaryBitwiseXNORCalculator'
import BinaryBitwiseNOTCalculator from '../Pages/BinaryCalculator/BinaryBitwiseNOTCalculator'
import BinaryBitInverterCalculator from '../Pages/BinaryCalculator/BinaryBitInverterCalculator'
import BinaryBitReverserCalculator from '../Pages/BinaryCalculator/BinaryBitReverserCalculator'
import BinaryBitRotator from '../Pages/BinaryCalculator/BinaryBitRotator'
import BinaryNumberRotator from '../Pages/BinaryCalculator/BinaryNumberRotator'

const BinaryCalcRoutes = () => {
  return (
    <Routes>
        <Route path='sum' element={<BinarySumCalculator/>}/>
        <Route path='product' element={<BinaryProductCalculator/>}/>
        <Route path='bitwise-and' element={<BinaryBitwiseANDCalculator/>}/>
        <Route path='bitwise-nand' element={<BinaryBitwiseNANDCalculator/>}/>
        <Route path='bitwise-or' element={<BinaryBitwiseORCalculator/>}/>
        <Route path='bitwise-xor' element={<BinaryBitwiseXORCalculator/>}/>
        <Route path='bitwise-nor' element={<BinaryBitwiseNORCalculator/>}/>
        <Route path='bitwise-xnor' element={<BinaryBitwiseXNORCalculator/>}/>
        <Route path='bitwise-not' element={<BinaryBitwiseNOTCalculator/>}/>
        <Route path='bit-inverter' element={<BinaryBitInverterCalculator/>}/>
        <Route path='bit-reverser' element={<BinaryBitReverserCalculator/>}/>
        <Route path='bit-rotator' element={<BinaryBitRotator/>}/>
        <Route path='number-rotator' element={<BinaryNumberRotator/>}/>
    </Routes>
  )
}

export default BinaryCalcRoutes