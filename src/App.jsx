import Home from './pages/Home';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExcersiseDetails from './pages/ExerciseDetails';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import './index.css';
import './App.css';

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
