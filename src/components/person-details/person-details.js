import React, { Component } from 'react';
import Button from '../button/button';

import {getPersonByID} from '../../services/sw-service';
import './person-details.css';

export default class PersonDetails extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
          index: 0,
          person: {}
      }
  }

  handleClick() {
    const nextIndex = this.state.index < 15 ? this.state.index + 1 : 1
    getPersonByID(nextIndex).then(resp => {
        this.setState({
            person: resp,
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
    const {person: {img, name, gender, birth_year, eye_color}} = this.state

    return (
      <div className="card">
        <div className="item-details">
          <img alt="person-img" className="item-image" src={img} />
          <div className="card-body">
          <h3>{name}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <span>Gender: </span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span>Birth Year: </span>
              <span>{birth_year}</span>
            </li>
            <li className="list-group-item">
              <span>Eye Color: </span>
              <span>{eye_color}</span>
            </li>
          </ul>
          </div>
        </div>
        <Button onClick={this.onClick}/>
      </div>
    )
  }
}