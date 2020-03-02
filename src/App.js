import React, { useState, useEffect, useLayoutEffect } from 'react';
import './css/main.css';
import Meals from './components/meals/Meals';
import Form from './components/form/form';

function App() {
  const [meals, setMeals] = useState({ breakfast: [], lunch: [], dinner: [] });

  useLayoutEffect(() => {
    let mealList = localStorage.getItem('meals');
    if (mealList) {
      setMeals(JSON.parse(localStorage.getItem('meals')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(meals));
  });

  const addFood = (food, meal) => {
    let mutableMeals = JSON.parse(JSON.stringify(meals));

    mutableMeals[meal] = [
      ...mutableMeals[meal],
      { id: Math.random(), name: food }
    ];
    setMeals(mutableMeals);
  };

  const deleteFood = (id, meal) => {
    let mutableMeals = JSON.parse(JSON.stringify(meals));

    const newFoodList = mutableMeals[meal].filter(item => {
      return item.id !== id;
    });
    mutableMeals[meal] = newFoodList;

    setMeals(mutableMeals);
  };

  const deleteAll = meal => {
    let mutableMeals = JSON.parse(JSON.stringify(meals));

    mutableMeals[meal] = [];

    setMeals(mutableMeals);
  };

  return (
    <div className="App grid">
      <div className="column__meal">
        <Meals meals={meals} deleteFood={deleteFood} deleteAll={deleteAll} />
      </div>
      <div className="column__nutrition">
        <Form addFood={addFood} />
      </div>
    </div>
  );
}

export default App;
