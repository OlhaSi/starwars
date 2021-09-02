import React, { Component } from 'react';
import Button from '../button/button';

import {getStarshipByID} from '../../services/sw-service';
import './starship-details.css';

export default class StarshipDetails extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      index: 8,
      starship: {}
    }
  }

  handleClick() {
    const nextIndex = this.state.index < 14 ? this.state.index + 1 : 8
    getStarshipByID(nextIndex).then(resp => {
      this.setState({
        starship: resp,
        index: nextIndex
      })
    }).catch(err => {
      this.setState({
        index: nextIndex 
      })
    })
  }

  componentDidMount() {
    this.handleClick()
  }

  onClick = () => {
    this.handleClick()    
  }

  render() {
    const {starship: {img, name, model, length, passengers}} = this.state

    return (
      <div className="card">
        <div className="item-details">
          <img alt="starship-img" className="item-image" src={img} />
          <div className="card-body">
          <h3>{name}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <span>Model: </span>
              <span>{model}</span>
            </li>
            <li className="list-group-item">
              <span>Length: </span>
              <span>{length}</span>
            </li>
            <li className="list-group-item">
              <span>Passengers: </span>
              <span>{passengers}</span>
            </li>
          </ul>
          </div>
        </div>
        <Button onClick={this.onClick}/>
      </div>
    )
  }
}