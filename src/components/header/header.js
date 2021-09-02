import React from 'react';

import './header.css';

const Header = (props) => {
  const {onPersonChange, onPlanetChange, onStarshipChange} = props
  return (
    <div className="header">
        <ul>
            <li>
                <a onClick = {onPersonChange} href="">People</a>
            </li>
            <li >
                <a onClick = {onPlanetChange} href="">Planets</a>
            </li>
            <li onClick = {onStarshipChange}>
                <a href="#">Starships</a>
            </li>
        </ul>
    </div>
  );
};

export default Header;
