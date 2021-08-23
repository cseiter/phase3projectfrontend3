import './App.css';
import React, {useEffect, useState} from 'react';
import BadgeContainer from './components/BadgeContainer';
import Header from "./components/Header";
import BadgeForm from './components/BadgeForm';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [badges, setBadges] = useState([]);

  useEffect(() => { 
    fetch("http://localhost:9393/badges")
    .then((r) => r.json())
    .then(console.log(setBadges));
  },[]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddBadge(newBadge) {
    setBadges([...badges, newBadge]);
  }

  function handleUpdateBadge(updatedBadge) {
    const updatedBadges = badges.map((badge) =>
    badge.id === updatedBadge.id ? updatedBadge : badge);
    setBadges(updatedBadges);
  }

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
