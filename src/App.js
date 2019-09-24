import React from 'react';
import './css/main.css';
import Meals from './components/meals/Meals'
import IngredientInput from './components/form/IngredientInput'

function App() {
  return (
    <div className="App grid">
      <div className="column__meal">
        <Meals/>
      </div>
      <div className="column__nutrition">
      <IngredientInput/>
      </div>
    </div>
  );
}

export default App;
