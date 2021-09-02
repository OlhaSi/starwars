import React, { Component } from 'react';
import Button from '../button/button';

import {getPlanetByID} from '../../services/sw-service';
import './planet-details.css';

export default class PlanetDetails extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      index: 1,
      planet: {}
    }
  }

  handleClick() {
    const nextIndex = this.state.index < 15 ? this.state.index + 1 : 2
    getPlanetByID(nextIndex).then(resp => {
      this.setState({
        planet: resp,
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
    const {planet: {img, name, diameter, gravity, population}} = this.state

    return (
      <div className="card">
        <div className="item-details">
          <img alt="planet-img" className="item-image" src={img}/>
          <div className="card-body">
          <h3>{name}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <span>Diameter: </span>
              <span>{diameter}</span>
            </li>
            <li className="list-group-item">
              <span>Gravity: </span>
              <span>{gravity}</span>
            </li>
            <li className="list-group-item">
              <span>Population: </span>
              <span>{population}</span>
            </li>
          </ul>
          </div>
        </div>
        <Button onClick={this.onClick}/>
      </div>
    )
  }
}