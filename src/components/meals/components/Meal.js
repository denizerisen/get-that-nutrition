import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const Meal = ({ foods, meal, styleName, deleteFood }) => {
  const foodList = foods ? (
    foods.map(function(food) {
      return (
        <CSSTransition key={food.id} timeout={300} classNames="move">
          <li>
            {food.name}
            <FontAwesomeIcon
              icon={faMinusCircle}
              onClick={() => {
                deleteFood(food.id, meal);
              }}
            />
          </li>
        </CSSTransition>
      );
    })
  ) : (
    <p>No food added yet.</p>
  );
  return (
    <div className={styleName + ' meal__wrapper'}>
      <h2>{meal}</h2>
      <hr />
      <ul className="food__list">
        <TransitionGroup>{foodList}</TransitionGroup>
      </ul>
    </div>
  );
};
export default Meal;
