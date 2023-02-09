import Home from './pages/Home';
import React from 'react';
import Navbar from './components/Navbar';
import ExcersiseDetails from './pages/ExcersiseDetails';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import './index.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/excersise/:id' element={<ExcersiseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
