import React, { Component } from 'react'

export class MenuItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: this.props.price, 
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.dishName}</h1>
                <h3>${this.props.price}</h3>
                <p>{this.props.children}</p>
                <button className='btn btn-success' onClick={() =>this.setState({price: this.state.price +1})}>{this.props.dishName}</button>
            </div>
        )
    }
}

export default MenuItem