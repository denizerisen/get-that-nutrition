import React, { useState, useEffect, useLayoutEffect } from 'react';
import './css/main.css';
import Meals from './components/meals/Meals';
import Form from './components/form/form';
import ProgressBar from './components/progressBar/ProgressBar';

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

  const addFood = async (food, meal) => {
    let mutableMeals = JSON.parse(JSON.stringify(meals));

    mutableMeals[meal] = [
      ...mutableMeals[meal],
      { id: Math.random(), name: food }
    ];
    const params = new URLSearchParams({
      ingr: '1 large banana'
    });
    const url = `https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?${params.toString()}`;

    await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
        'x-rapidapi-key': '5c186b0976msh3857252a5f3805ap1860a7jsn98ac6f755949'
      }
    })
      .then(response => {
        console.log('lelo');
        return response.json();
      })
      .then(body => {
        console.log('hey', body);
      })
      .catch(err => {
        console.log(err);
      });

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
        <ProgressBar mineral="zinc" count={0} />
      </div>
    </div>
  );
}

export default App;
