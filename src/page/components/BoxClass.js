import React, { Component } from 'react'
import '../styles/RockPaperScissors.css';

export default class BoxClass extends Component {

    render() {
        return (
            <div className={this.props.resultClass}>
                <h3>{this.props.title}</h3>
                <img className='item-image' src={this.props.item && this.props.item.img}/>
                <h3>{this.props.result}</h3>
            </div>
        )
    }
}
