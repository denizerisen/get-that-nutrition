import React from 'react';
import './css/main.css';
import Meals from './components/meals/Meals'

function App() {
  return (
    <div className="App grid">
      <div className="column__meal">
        <Meals/>
      </div>
      <div className="column__nutrition">
      </div>
    </div>
  );
}

export default App;
