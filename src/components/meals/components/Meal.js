import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const Meal = ({foods,meal,styleName }) => {
    const foodList = foods ? (
        foods.map(function(food){
            return <React.Fragment>
                    <li key={food.id}>
                        {food.name}
                        <FontAwesomeIcon icon={faMinusCircle} />
                    </li>
                    </React.Fragment>
        })
    ):(
       <p>No food added yet.</p>
    )
    return(
        <div className={styleName + " meal__wrapper"}>
                <h2>{meal}</h2>
                <hr/>
                <ul className="food__list">
                {foodList}
                </ul>
            </div>
    )
}
export default Meal;

