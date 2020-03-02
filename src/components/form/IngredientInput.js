import React, { Component } from 'react'

export default class IngredientInput extends Component {
    state = {
        foodInput: ''
    }
    handleChange = (e) => {
        this.setState({
            foodInput: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Add food</label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
