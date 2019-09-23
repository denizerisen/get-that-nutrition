import React, { Component } from 'react'

export default class Meal extends Component {
    constructor(props){
        super(props);
        this.state={
            length: this.props.foodList.length
        }
    }
    render() {
        
        return (
            <div className={this.props.styleName + " meal__wrapper"}>
                <h2>{this.props.meal}</h2>
                <hr/>
                <ul className="food__list">
                    {this.state.length===0 ? <p>No food added yet.</p> : this.props.foodList}
                </ul>
            </div>
        )
    }
}
