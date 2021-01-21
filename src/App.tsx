import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SharedProvider } from './store/Shared';
import Routes from './Routes';

import './App.css';
import { Feed } from './pages/Feed';

function App() {
  return (
    <BrowserRouter>
      <SharedProvider>
        <Routes />
      </SharedProvider>
    </BrowserRouter>
  );
}

export default App;
