import React from 'react';
import Window from './components/Window';
import { Routes, Route } from 'react-router-dom';
import IDE from './layout/IDE';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <Window title="portfolio - VS Code">
      <Routes>
        <Route path="/" element={<IDE />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Window>
  );
};

export default App;
