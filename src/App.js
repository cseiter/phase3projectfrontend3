import './App.css';
import React, {useEffect, useState} from 'react';
import BadgeContainer from './components/BadgeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Merit Badge Tracker
      </header>
      <BadgeContainer />
    </div>
  );
}

export default App;
