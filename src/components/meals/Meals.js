import React, { Component } from 'react'

import Meal from './components/Meal'
export default class Meals extends Component {
    state={
        breakfast: [
            {id: 1, name:'banana'},
            {id: 2, name:'apple'},
            {id: 3, name:'banana'},
        ],
        lunch: [
            {id: 1, name:'banana'},
            {id: 2, name:'mango'},
            {id: 3, name:'banana'},
        ],
        dinner: [
            {id: 1, name:'banana'},
            {id: 2, name:'strawberry'},
            {id: 3, name:'banana'},
        ]
    }
    deleteFood = (id) =>{
        let newFoodList = this.state.breakfast.filter(food =>{
            return food.id != id
        })
        this.setState({
            breakfast: newFoodList
        })
    }
    render() {
        
        return (
            <div>
                <Meal 
                    styleName="meal__wrapper--pink"
                    meal="breakfast"
                    foods={this.state.breakfast}
                    deleteFood={this.deleteFood}
                />
                <Meal
                    styleName="meal__wrapper--yellow"
                    meal="lunch"
                    foods={this.state.lunch}
                />
                <Meal
                    styleName="meal__wrapper--purple"
                    meal="dinner" 
                    foods={this.state.dinner}
                />
            </div>
        )
    }
}
