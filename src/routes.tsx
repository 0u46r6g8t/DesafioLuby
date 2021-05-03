/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Routes,
  Route,
} from 'react-router-dom';

// Compoenents
import CardPeoples from './components/CardPeoples';
import Repositories from './pages/Repositories';
import Login from './pages/login';

function mainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/:username" element={<CardPeoples />} />
      <Route path="/:username/repository" element={<Repositories />} />
    </Routes>
  );
}

export default mainRoutes;
