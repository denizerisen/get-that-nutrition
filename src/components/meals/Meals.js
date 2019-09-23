import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import Meal from './components/Meal'
export default class Meals extends Component {
    render() {
        //will request the array from api later on
        let breakfast=['banana','oat','apple'];
        let lunch = [];
        let breakfastList = breakfast.map(function(food,index){
            return <React.Fragment>
                    <li key={index}>
                        {food}
                        <FontAwesomeIcon icon={faMinusCircle} />
                    </li>
                    </React.Fragment>
        })
        let lunchList = lunch.map(function(food,index){
            return <li key={index}>{food}</li>
        })
        console.log(lunchList);
        return (
            <div>
                <Meal 
                    styleName="meal__wrapper--pink"
                    meal="breakfast"
                    foodList={breakfastList}
                />
                <Meal
                    styleName="meal__wrapper--yellow"
                    meal="lunch"
                    foodList={lunchList}
                />
                <Meal
                    styleName="meal__wrapper--purple"
                    meal="dinner" 
                    foodList={lunchList}
                />
            </div>
        )
    }
}
