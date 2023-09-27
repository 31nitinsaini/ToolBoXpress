import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LowerToUpper from '../Pages/TextManipulation/LowerToUpper'
import UpperToLower from '../Pages/TextManipulation/UpperToLower'
import RemoveSpace from '../Pages/TextManipulation/RemoveSpace'
import TextCount from '../Pages/TextManipulation/TextCount'
import ReverseText from '../Pages/TextManipulation/ReverseText'
import ReplaceWords from '../Pages/TextManipulation/ReplaceWords'
import TextEncrypt from '../Pages/TextManipulation/TextEncrypt'
import TextDecrypt from '../Pages/TextManipulation/TextDecrypt'
import LoremGenrator from '../Pages/TextManipulation/LoremGenrator'
import TextToSpeech from '../Pages/TextManipulation/TextToSpeech'

const TextManipulationRoutes = () => {
  return (
    <Routes>
    <Route path='/lower-to-upper' element={<LowerToUpper/>}/>
    <Route path='/upper-to-lower' element={<UpperToLower/>}/>
    <Route path='/remove-space' element={<RemoveSpace/>}/>
    <Route path='/text-count' element={<TextCount/>}/>
    <Route path='/reverse-text' element={<ReverseText/>}/>
    <Route path='/replace-Words' element={<ReplaceWords/>}/>
    <Route path='/text-encryption' element={<TextEncrypt/>}/>
    <Route path='/text-decryption' element={<TextDecrypt/>}/>
    <Route path='/lorem-genrator' element={<LoremGenrator/>}/>
    <Route path='/text-to-speech' element={<TextToSpeech/>}/>
  </Routes>
)}

export default TextManipulationRoutes