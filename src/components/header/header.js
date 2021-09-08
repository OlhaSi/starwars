import React from "react";

import "./header.css";

const Header = (props) => {
  const { onPersonChange, onPlanetChange, onStarshipChange } = props;
  return (
    <div className="header">
      <ul>
        <li>
          <a onClick={onPersonChange} href="">
            Persons
          </a>
        </li>
        <li>
          <a onClick={onPlanetChange} href="">
            Planets
          </a>
        </li>
        <li>
          <a onClick={onStarshipChange} href="">
            Starships
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
