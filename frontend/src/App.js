import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import AllRoutes from './Routes/AllRoutes';
const App = () => {


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path='/*' element={<AllRoutes/>} />
      </Routes>
    </Router >
  );
};

export default App;
