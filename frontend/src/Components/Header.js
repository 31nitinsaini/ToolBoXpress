import React, { useState, useMemo, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/css/main.css';

const DropdownItem = ({ to, label }) => (
  <div className='row'>
    <NavLink to={to}>{label}</NavLink>
  </div>
);


const Dropdown = ({ title, isVisible, toggleDropdown, closeDropdowns, items }) => {
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (!isVisible) {
      toggleDropdown();
    }
  };

  const handleMouseLeave = (event) => {
    if (isVisible && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const isInDropdown = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );

      if (!isInDropdown) {
        closeDropdowns();
      }
    }
  };

  return (
    <>
      <a href="#" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </a>
      {isVisible && (
        <div
          ref={dropdownRef}
          className="card"
          style={{
            position: 'absolute', // or 'fixed' depending on your layout
            zIndex: 1000,
          }} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-body" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {items.map((item) => (
              <DropdownItem key={item.to} {...item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};




const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    text: false,
    image: false,
    file: false,
    coding: false,
    utility: false,
    calculator: false,
  });

  const toggleDropdown = useCallback((dropdown) => {
    setDropdowns((prevState) => {
      const updatedDropdowns = { ...prevState };

      // Close all other dropdowns
      Object.keys(updatedDropdowns).forEach((key) => {
        if (key !== dropdown) {
          updatedDropdowns[key] = false;
        }
      });

      // Toggle the specified dropdown
      updatedDropdowns[dropdown] = !prevState[dropdown];
      return updatedDropdowns;
    });
  }, []);

  const closeDropdowns = useCallback(() => {
    setDropdowns({
      text: false,
      image: false,
      file: false,
      coding: false,
      utility: false,
      calculator: false,
    });
  }, []);

  const dropdownConfig = [
    {
      title: 'Text Manipulation Tool',
      dropdown: 'text',
      items: [
        { to: '/text-manipulation/lower-to-upper', label: 'Convert Lower to Upper' },
        { to: '/text-manipulation/upper-to-lower', label: 'Convert Upper to Lower' },
        { to: '/text-manipulation/remove-space', label: 'Remove Space' },
        { to: '/text-manipulation/text-count', label: 'Text Count' },
        { to: '/text-manipulation/reverse-text', label: 'Reverse Text' },
        { to: '/text-manipulation/replace-Words', label: 'Replace Text' },
        { to: '/text-manipulation/text-to-speech', label: 'Text to Speech' },
        { to: '/text-manipulation/text-encryption', label: 'Text Encryption' },
        { to: '/text-manipulation/text-decryption', label: 'Text Decryption' },
        { to: '/text-manipulation/morse-code', label: 'Morse Code' },
        { to: '/text-manipulation/lorem-genrator', label: 'Lorem Generator' },
      ],
    },
    {
      title: 'Image Manipulation Tool',
      dropdown: 'image',
      items: [
        { to: '/ImageManipulation/image-resize', label: 'Resize Image' },
        { to: '/ImageManipulation/image-crop', label: 'Crop Image' },
        { to: '/ImageManipulation/image-rotate', label: 'Rotate Image' },
        { to: '/ImageManipulation/image-water-mark', label: 'Add Watermark' },
        { to: '/ImageManipulation/image-filter', label: 'Apply Image Filters' },
        { to: '/ImageManipulation/image-conversion', label: 'Image Format Conversion' },
      ],
    },
    {
      title: 'File Conversion Tool',
      dropdown: 'file',
      items: [
        { to: '/FileConversionTool/excel-to-pdf', label: 'Excel to PDF' },
        { to: '/FileConversionTool/image-to-pdf', label: 'Image to PDF' },
        { to: '/FileConversionTool/text-to-pdf', label: 'Text to PDF' },
        { to: '/FileConversionTool/pdf-merge', label: 'Merge PDF' },
        { to: '/FileConversionTool/pdf-split', label: 'Split PDF' },
      ],
    },
    {
      title: 'Coding Tools',
      dropdown: 'coding',
      items: [
        { to: '/CodingTool/html-formatter', label: 'HTML Formatter' },
        { to: '/CodingTool/code-editor', label: 'HTML Viewer' },
        { to: '/CodingTool/css-minifier', label: 'CSS Minifier' },
        { to: '/CodingTool/js-minifier', label: 'JavaScript Minifier' },
        { to: '/CodingTool/json-formatter', label: 'JSON Formatter' },
        { to: '/CodingTool/sql-editor', label: 'SQL Formatter' },
        { to: '/CodingTool/markdown-editor', label: 'Markdown Editor' },
        { to: '/CodingTool/code-snippet', label: 'Code Snippet Generator' },
        { to: '/CodingTool/plant-uml', label: 'Plant UML Tool' },
      ],
    },
    {
      title: 'Utility',
      dropdown: 'utility',
      items: [
        { to: '/Utility/qr-code-genrator', label: 'QR code genrator' },
        { to: '/Utility/bar-code-genrator', label: 'Bar code generator' },
        { to: '/Utility/password-genrator', label: 'Password generator' },
      ],
    },
    {
      title: 'Math & Calculator',
      dropdown: 'calculator',
      items: [
        { to: '/MathCalculator/basic-calc', label: 'Basic Calculator' },
        { to: '/MathCalculator/scientific-calculator', label: 'Scientific Calculator' },
        { to: '/MathCalculator/unit-converter', label: 'Unit Converter' },
        { to: '/MathCalculator/currency-converter', label: 'Currency Converter' },
        { to: '/MathCalculator/days-calculator', label: 'Days Calculator' },
        { to: '/MathCalculator/age-calculator', label: 'Age Calculator' },
      ],
    },
  ];

  return (
    <div>
      {/* Add your styles here */}
      <header>
        <h1>ToolboXpress</h1>
        <p>Your Online Utility Store</p>
      </header>
      <nav className='hide-on-mobile'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          {dropdownConfig.map(({ title, dropdown, items }) => (
            <li
              key={title}
              className={dropdowns[dropdown] ? 'active' : ''}
            >
              <Dropdown
                title={title}
                isVisible={dropdowns[dropdown]}
                toggleDropdown={() => toggleDropdown(dropdown)}
                closeDropdowns={closeDropdowns}
                items={items}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
