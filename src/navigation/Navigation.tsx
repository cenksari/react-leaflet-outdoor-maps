import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';

const Navigation: React.FC = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>
);

export default Navigation;
