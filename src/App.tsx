import React from 'react';

// Style
import './style/global.scss';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import RoutesLib from './routes';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <RoutesLib />
    </div>
  </Router>
);

export default App;
