import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Calculator from 'react-calculator';
import 'react-calculator/style.css'; // Import the CSS

const BasicCalculator = () => {
  return (
    <>
      <Header />
      <main>
        <div className="calculator">
          <Calculator />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BasicCalculator;
