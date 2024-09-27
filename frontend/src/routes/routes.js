// TechPage.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/news/:category' element={<HomePage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
