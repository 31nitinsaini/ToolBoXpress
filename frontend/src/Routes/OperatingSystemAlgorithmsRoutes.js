import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Fifo from '../Pages/OperatingSystemAlgorithms/Fifo'
import SJFAlgorithmCalculator from '../Pages/OperatingSystemAlgorithms/SJFAlgorithmCalculator'
import RoundRobinAlgorithmCalculator from '../Pages/OperatingSystemAlgorithms/RoundRobin'
import FCFSAlgorithmCalculator from '../Pages/OperatingSystemAlgorithms/Fcfs'
import PriorityAlgorithmCalculator from '../Pages/OperatingSystemAlgorithms/PriorityAlgorithm'
import LruPageReplacement from '../Pages/OperatingSystemAlgorithms/LruPageReplacement'
import OptimalPageReplacement from '../Pages/OperatingSystemAlgorithms/OptimalPageReplacement'

const OperatingSystemAlgorithmsRoutes = () => {
  return (
    <Routes>
    <Route path='fifo' element={<Fifo/>}/>
    <Route path='fcfs' element={<FCFSAlgorithmCalculator/>}/>
    <Route path='sjf' element={<SJFAlgorithmCalculator/>}/>
    <Route path='rr' element={<RoundRobinAlgorithmCalculator/>}/>
    <Route path='priority' element={<PriorityAlgorithmCalculator/>}/>
    <Route path='lru' element={<LruPageReplacement/>}/>
    <Route path='optimal' element={<OptimalPageReplacement/>}/>
</Routes>
  )
}

export default OperatingSystemAlgorithmsRoutes