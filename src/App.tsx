import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ContextMode } from './components/ContextMode/ContextMode';
import { ModeSelector } from './components/ModeSelector';
import { ReduxMode } from './components/ReduxMode/ReduxMode';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ModeSelector />}>
          <Route path="/context-mode" element={<ContextMode />} />
          <Route path="/redux-mode" element={<ReduxMode />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
