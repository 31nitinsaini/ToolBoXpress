import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/css/main.css';

const Header = () => {
  const [isTextDropdownVisible, setTextDropdownVisible] = useState(false);
  const [isPdfDropdownVisible, setPdfDropdownVisible] = useState(false);
  const [isImageDropdownVisible, setImageDropdownVisible] = useState(false);
  const [isSocialDropdownVisible, setSocialDropdownVisible] = useState(false);
  const [isFileDropdownVisible, setFileDropdownVisible] = useState(false);
  const [isCodingDropdownVisible, setCodingDropdownVisible] = useState(false);
  const [isUtilityDropdownVisible, setUtilityDropdownVisible] = useState(false);
  const [isCalculatorDropdownVisible, setCalculatorDropdownVisible] = useState(false);

  const toggleTextDropdown = () => {
    setTextDropdownVisible(!isTextDropdownVisible);
  };

  const togglePdfDropdown = () => {
    setPdfDropdownVisible(!isPdfDropdownVisible);
  };

  const toggleImageDropdown = () => {
    setImageDropdownVisible(!isImageDropdownVisible);
  };

  const toggleSocialDropdown = () => {
    setSocialDropdownVisible(!isSocialDropdownVisible);
  };

  const toggleFileDropdown = () => {
    setFileDropdownVisible(!isFileDropdownVisible);
  };

  const toggleCodingDropdown = () => {
    setCodingDropdownVisible(!isCodingDropdownVisible);
  };
  const toggleUtilityDropdown = () => {
    setUtilityDropdownVisible(!isUtilityDropdownVisible);
  };
  const toggleCalculatorDropdown = () => {
    setCalculatorDropdownVisible(!isCalculatorDropdownVisible);
  };

  const closeDropdowns = () => {
    setTextDropdownVisible(false);
    setPdfDropdownVisible(false);
    setImageDropdownVisible(false);
    setSocialDropdownVisible(false);
    setFileDropdownVisible(false);
    setCodingDropdownVisible(false);
    setUtilityDropdownVisible(false);
    setCalculatorDropdownVisible(false);
  };

  return (
    
    <div>
    <style dangerouslySetInnerHTML={{__html: "/* Add this CSS to your main.css or a separate CSS file */\n@media (max-width: 768px) { /* Adjust the max-width to your desired breakpoint */\n  .hide-on-mobile {\n    display: none;\n  }\n}\n" }} />

      <header>
        <h1>ToolboXpress</h1>
        <p>Your Online Utility Store</p>
      </header>
      <nav className='hide-on-mobile'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li
            onMouseEnter={toggleTextDropdown}
            onMouseLeave={closeDropdowns}
            className={isTextDropdownVisible ? 'active' : ''}
          >
            <a href="#">Text Manipulation Tool</a>
            {isTextDropdownVisible && (
              <div className="card" style={{ zIndex: 1000 }}>
                <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <div className='row'><NavLink to="/text-manipulation/lower-to-upper">Convert Lower to Upper</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/upper-to-lower">Convert Upper to Lower</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/remove-space">Remove Space</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/text-count">Text Count</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/reverse-text">Reverse Text</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/replace-Words">Replace Text</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/text-to-speech">Text to Speech</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/text-encryption">Text Encryption</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/text-decryption">Text Decryption</NavLink></div>
                  <div className='row'><NavLink to="/text-manipulation/lorem-genrator">Lorem Generator</NavLink></div>
                  {/* Add more sub-tools here */}
                </div>
              </div>
            )}

          </li>
          <li
            onMouseEnter={togglePdfDropdown}
            onMouseLeave={closeDropdowns}
            className={isPdfDropdownVisible ? 'active' : ''}
          >
            <a href="#">PDF Manipulation Tool</a>
            {isPdfDropdownVisible && (
              <div className="card" style={{ zIndex: 1000 }}>
                <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <div className='row'><NavLink to="#pdf-tool-1">PDF Tool 1</NavLink></div>
                  <div className='row'><NavLink to="#pdf-tool-2">PDF Tool 2</NavLink></div>
                  {/* Add more sub-tools here */}
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={toggleImageDropdown}
            onMouseLeave={closeDropdowns}
            className={isImageDropdownVisible ? 'active' : ''}
          >
            <a href="#">Image Manipulation Tool</a>
            {isImageDropdownVisible && (
              <div className="card" style={{ zIndex: 1000 }}>
                <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <div className='row'><NavLink to="#convert-jpg-to-png">Convert File type</NavLink></div>
                  <div className='row'><NavLink to="#resize-image">Resize Image</NavLink></div>
                  <div className='row'><NavLink to="#crop-image">Crop Image</NavLink></div>
                  <div className='row'><NavLink to="#rotate-image">Rotate Image</NavLink></div>
                  <div className='row'><NavLink to="#add-watermark">Add Watermark</NavLink></div>
                  <div className='row'><NavLink to="#image-filter">Apply Image Filters</NavLink></div>
                  <div className='row'><NavLink to="#image-compression">Image Compression</NavLink></div>
                  <div className='row'><NavLink to="#image-conversion">Image Format Conversion</NavLink></div>
                  {/* Add more sub-tools here */}
                </div>
              </div>
            )}

          </li>
          <li
            onMouseEnter={toggleSocialDropdown}
            onMouseLeave={closeDropdowns}
            className={isSocialDropdownVisible ? 'active' : ''}
          >
            <a href="#">Social Media Tools</a>
            {isSocialDropdownVisible && (
              <div className="card" style={{ zIndex: 1000 }}>
                <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <div className='row'><NavLink to="#insta-download">Instagram Video Download</NavLink></div>
                  <div className='row'><NavLink to="#youtube-download">YouTube Video Download</NavLink></div>
                  <div className='row'><NavLink to="#fb-video-download">Facebook Video Download</NavLink></div>
                  <div className='row'><NavLink to="#twitter-video-download">Twitter Video Download</NavLink></div>
                  <div className='row'><NavLink to="#tiktok-video-download">TikTok Video Download</NavLink></div>
                  <div className='row'><NavLink to="#vimeo-video-download">Vimeo Video Download</NavLink></div>
                  <div className='row'><NavLink to="#dailymotion-video-download">Dailymotion Video Download</NavLink></div>
                  <div className='row'><NavLink to="#soundcloud-audio-download">SoundCloud Audio Download</NavLink></div>
                  {/* Add more social media tools here */}
                </div>
              </div>
            )}

          </li>
          <li
            onMouseEnter={toggleFileDropdown}
            onMouseLeave={closeDropdowns}
            className={isFileDropdownVisible ? 'active' : ''}
          >
            <a href="#">File Conversion Tools</a>
            {isFileDropdownVisible && (
              <div className="card" style={{ zIndex: 1000 }}>
                <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <div className='row'><NavLink to="#word-to-pdf">Word to PDF</NavLink></div>
                  <div className='row'><NavLink to="#pdf-to-word">PDF to Word</NavLink></div>
                  <div className='row'><NavLink to="#excel-to-pdf">Excel to PDF</NavLink></div>
                  <div className='row'><NavLink to="#pdf-to-excel">PDF to Excel</NavLink></div>
                  <div className='row'><NavLink to="#image-to-pdf">Image to PDF</NavLink></div>
                  <div className='row'><NavLink to="#pdf-to-image">PDF to Image</NavLink></div>
                  <div className='row'><NavLink to="#txt-to-pdf">Text to PDF</NavLink></div>
                  <div className='row'><NavLink to="#pdf-merge">Merge PDF</NavLink></div>
                  <div className='row'><NavLink to="#pdf-split">Split PDF</NavLink></div>
                  {/* Add more file conversion tools here */}
                </div>
              </div>
            )}

          </li>
          <li
            onMouseEnter={toggleCodingDropdown}
            onMouseLeave={closeDropdowns}
            className={isCodingDropdownVisible ? 'active' : ''}
          >
            <a href="#">Coding Tools</a>
            {isCodingDropdownVisible && (
              <div className="card" style={{ zIndex: 1000 }}>
                <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <div className='row'><NavLink to="#html-formatter">HTML Formatter</NavLink></div>
                  <div className='row'><NavLink to="#code-editor">Code Editor</NavLink></div>
                  <div className='row'><NavLink to="#css-minifier">CSS Minifier</NavLink></div>
                  <div className='row'><NavLink to="#js-minifier">JavaScript Minifier</NavLink></div>
                  <div className='row'><NavLink to="#json-formatter">JSON Formatter</NavLink></div>
                  <div className='row'><NavLink to="#sql-editor">SQL Editor</NavLink></div>
                  <div className='row'><NavLink to="#markdown-editor">Markdown Editor</NavLink></div>
                  <div className='row'><NavLink to="#code-snippet-generator">Code Snippet Generator</NavLink></div>
                  {/* Add more coding tools here */}
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={toggleUtilityDropdown}
            onMouseLeave={closeDropdowns}
            className={isUtilityDropdownVisible ? 'active' : ''}
          >
            <a href="#">Utility</a>
            {isUtilityDropdownVisible && (
              <div className="card" style={{ zIndex: 1000 }}>
                <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <div className='row'><NavLink to="/Utility/qr-code-genrator">QR code genrator</NavLink></div>
                  <div className='row'><NavLink to="/Utility/bar-code-genrator">Bar code generator</NavLink></div>
                  <div className='row'><NavLink to="/Utility/password-genrator">password genrator</NavLink></div>
                  {/* Add more coding tools here */}
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={toggleCalculatorDropdown}
            onMouseLeave={closeDropdowns}
            className={isCalculatorDropdownVisible ? 'active' : ''}
          >
            <a href="#">Math&Calculator</a>
            {isCalculatorDropdownVisible && (
              <div className="card" style={{ zIndex: 1000 }}>
                <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  <div className='row'><NavLink to="/MathCalculator/basic-calc">Basic Calculator</NavLink></div>
                  <div className='row'><NavLink to="/MathCalculator/scientific-calculator">Scientific Calculatror</NavLink></div>
                  <div className='row'><NavLink to="/MathCalculator/unit">Unit Converter</NavLink></div>
                   {/* Add more coding tools here */}
                </div>
              </div>
            )}
          </li>
          
          {/* Add other tools and sub-tools in a similar fashion */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
