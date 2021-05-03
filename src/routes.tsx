/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Routes,
  Route,
} from 'react-router-dom';

// Compoenents
import Repositories from './pages/Repositories';
import Login from './pages/Login';
import Home from './pages/Home';
import ListFollowers from './components/ListUsers';
import Followers from './pages/Seguidores';

function mainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/:username" element={<Home />} />
      <Route path="/:username/repository" element={<Repositories />} />
      {/* Gerencia as rotas de seguidores */}
      <Route path="/:username/followers" element={<ListFollowers />} />
      <Route path="/:username/followers/:userFollowers" element={<Followers />} />
      {/* Gerencia as rotas de seguindo */}
      {/* <Route path="/:username/following" element={< />} /> */}
    </Routes>
  );
}

export default mainRoutes;
