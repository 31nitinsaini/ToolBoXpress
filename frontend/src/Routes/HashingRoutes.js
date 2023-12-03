import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MD5HashGenerator from '../Pages/HashingTool/MD5HashGenerator'
import SHA256HashGenerator from '../Pages/HashingTool/SHA256HashGenerator'
import SHA512HashGenerator from '../Pages/HashingTool/SHA512HashGenerator'
import Base64Encoder from '../Pages/HashingTool/Base64Encoder'
import HMACGenerator from '../Pages/HashingTool/HMACGenerator'
import BcryptGenerator from '../Pages/HashingTool/BcryptGenerator'
import SaltedHashGenerator from '../Pages/HashingTool/SaltedHashGenerator'
import UUIDGenerator from '../Pages/HashingTool/UUIDGenerator'
import RandomStringGenerator from '../Pages/HashingTool/RandomStringGenerator'
import CRC32Generator from '../Pages/HashingTool/CRC32Generator'
import Ripemd160Generator from '../Pages/HashingTool/Ripemd160Generator'
import Base64Decoder from '../Pages/HashingTool/Base64Decoder'

const HashingRoutes = () => {
    return (
        <Routes>
            <Route path='md5' element={<MD5HashGenerator />} />
            <Route path='sha-256' element={<SHA256HashGenerator />} />
            <Route path='sha-512' element={<SHA512HashGenerator />} />
            <Route path='base64-encode' element={<Base64Encoder />} />
            <Route path='base64-decode' element={<Base64Decoder />} />
            <Route path='hmac-generator' element={<HMACGenerator />} />
            <Route path='bcrypt-generator' element={<BcryptGenerator />} />
            <Route path='salted-hash-generator' element={<SaltedHashGenerator />} />
            <Route path='uuid-generator' element={<UUIDGenerator />} />
            <Route path='random-string-generator' element={<RandomStringGenerator />} />
            <Route path='crc32-generator' element={<CRC32Generator />} />
            <Route path='ripemd160-generator' element={<Ripemd160Generator />} />
        </Routes>
    )
}

export default HashingRoutes