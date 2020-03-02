import React from 'react';

import Meal from './components/Meal';
export default function Meals(props) {
  const { deleteFood, meals } = props;

  return (
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
  );
}
