import './App.css';
import React, {useEffect, useState} from 'react';
import BadgeContainer from './components/BadgeContainer';

function App() {

  const [setBadges] = useState([]);

  useEffect(() => { 
    fetch("http://localhost:9393/badges")
    .then((r) => r.json())
    .then(setBadges);
  },[]);

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
