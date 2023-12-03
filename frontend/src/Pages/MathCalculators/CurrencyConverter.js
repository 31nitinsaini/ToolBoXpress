import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );

        const rate = response.data.rates[toCurrency];
        setExchangeRate(rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error.message);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      const converted = amount * exchangeRate;
      setConvertedAmount(converted);
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };
  const currentUrl = window.location.href;
  return (
    <>
    <Helmet>
      <title>ToolboXpress - Currency Converter</title>
      <meta name="description" content="Convert currencies with up-to-date exchange rates using ToolboXpress Currency Converter. Get accurate conversions for your financial transactions. Fast, intuitive, and free!" />
      <meta name="keywords" content="Currency converter, exchange rates, currency conversion, financial tools, ToolboXpress" />
      <meta name="author" content="Your Name" />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content="ToolboXpress - Currency Converter" />
      <meta property="og:description" content="Convert currencies with up-to-date exchange rates using ToolboXpress Currency Converter. Get accurate conversions for your financial transactions. Fast, intuitive, and free!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ToolboXpress - Currency Converter" />
      <meta name="twitter:description" content="Convert currencies with up-to-date exchange rates using ToolboXpress Currency Converter. Get accurate conversions for your financial transactions. Fast, intuitive, and free!" />

      {/* Canonical URL to specify the preferred version of a page */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
      <Header />
      <div className="container mt-5 mb-4">
        <h2>Currency Converter</h2>
        <div className="mb-3">
          <label>
            Amount:
            <input type="number" className="form-control" value={amount} onChange={handleAmountChange} />
          </label>
        </div>
        <div className="mb-3">
          <label>
            From Currency:
            <select className="form-select" value={fromCurrency} onChange={handleFromCurrencyChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label>
            To Currency:
            <select className="form-select" value={toCurrency} onChange={handleToCurrencyChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
        </div>
        {exchangeRate !== null && (
          <div>
            <p>
              {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
            </p>
          </div>
        )}
      </div>
      <RatingComponent/>
      <Footer />
    </>
  );
};

export default CurrencyConverter;
