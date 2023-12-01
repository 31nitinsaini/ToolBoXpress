import React from 'react'
import { Routes,Route } from 'react-router-dom'
import BasicCalculator from '../Pages/MathCalculators/BasicCalculator'
import ScientificCalculatror from '../Pages/MathCalculators/ScientificCalculatror'
import UnitConvertor from '../Pages/MathCalculators/UnitConvertor'
import CurrencyConverter from '../Pages/MathCalculators/CurrencyConverter'
import DaysCalculator from '../Pages/MathCalculators/DaysCalculator'
const CalculatorRoutes = () => {
  return (
    <Routes>
        <Route path='basic-calc' element={<BasicCalculator/>}/>
        <Route path='scientific-calculator' element={<ScientificCalculatror/>}/>
        <Route path='unit-converter' element={<UnitConvertor/>}/>
        <Route path='currency-converter' element={<CurrencyConverter/>}/>
        <Route path='days-calculator' element={<DaysCalculator/>}/>
    </Routes>
  )
}

export default CalculatorRoutes