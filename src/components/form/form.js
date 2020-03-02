import React, { useState } from 'react';

export default function Form(props) {
  const { addFood } = props;
  const [foodVal, setFoodVal] = useState('');
  const [mealVal, setMealVal] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addFood(foodVal, mealVal);
  };

  const handleChange = e => {
    setFoodVal(e.target.value);
  };

  const handleMeal = e => {
    setMealVal(e.target.value);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        value={foodVal}
        onChange={e => {
          handleChange(e);
        }}
        placeholder="enter food"
      />
      <select value={mealVal} onChange={e => handleMeal(e)}>
        <option selected disabled value="">
          "please select meal"
        </option>
        <option value="breakfast">breakfast</option>
        <option value="lunch">lunch</option>
        <option value="dinner">dinner</option>
      </select>
      <input type="submit" value="Add" />
    </form>
  );
}
