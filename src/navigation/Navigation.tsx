import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';

const Navigation = (): React.JSX.Element => (
  <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>
);

export default Navigation;
