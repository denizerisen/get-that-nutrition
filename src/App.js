import React, { useState } from 'react';
import './css/main.css';
import Meals from './components/meals/Meals';
import Form from './components/form/form';

const mealsjson = {
  breakfast: [
    { id: 1, name: 'banana' },
    { id: 2, name: 'apple' },
    { id: 3, name: 'banana' }
  ],
  lunch: [
    { id: 1, name: 'banana' },
    { id: 2, name: 'mango' },
    { id: 3, name: 'banana' }
  ],
  dinner: [
    { id: 1, name: 'banana' },
    { id: 2, name: 'strawberry' },
    { id: 3, name: 'banana' }
  ]
};

function App() {
  const [meals, setMeals] = useState(mealsjson);

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

  return (
    <div className="App grid">
      <div className="column__meal">
        <Meals meals={meals} deleteFood={deleteFood} />
      </div>
      <div className="column__nutrition">
        <Form addFood={addFood} />
      </div>
    </div>
  );
}

export default App;
