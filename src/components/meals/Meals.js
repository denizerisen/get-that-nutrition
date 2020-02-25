import React, { useState } from "react";

import Meal from "./components/Meal";

export default function Meals() {
  const [meals, setMeals] = useState({
    breakfast: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" }
    ]
  });

  const [foodInput, setFoodInput] = useState("");
  const [mealInput, setMealInput] = useState("");

  const handleFoodInput = e => {
    const value = e.target.value;
    setFoodInput(value);
  };

  const deleteFood = (id, meal) => {
    let mutableMeals = JSON.parse(JSON.stringify(meals));

    const newFoodList = mutableMeals[meal].filter(item => {
      return item.id !== id;
    });
    mutableMeals[meal] = newFoodList;

    setMeals(mutableMeals);
  };

  const add = () => {};

  return (
    <div className="column__meal">
      <div>
        <Meal
          styleName="meal__wrapper--pink"
          meal="breakfast"
          foods={meals.breakfast}
          deleteFood={deleteFood}
        />
        <Meal
          styleName="meal__wrapper--yellow"
          meal="lunch"
          foods={meals.lunch}
          deleteFood={deleteFood}
        />
        <Meal
          styleName="meal__wrapper--purple"
          meal="dinner"
          foods={meals.dinner}
          deleteFood={deleteFood}
        />
      </div>
      <div>
        <label> Add food</label>
        <input
          type="text"
          onChange={e => {
            handleFoodInput(e);
          }}
        />
        <select>
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>
        </select>
        <button
          type="button"
          onClick={() => {
            add();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
