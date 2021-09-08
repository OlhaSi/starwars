import React, { useCallback, useEffect, useState } from "react";
import Button from "../button/button";

import { getPlanetByID } from "../../services/sw-service";
import "./planet-details.css";

const PlanetDetails = () => {
  const [index, setIndex] = useState(1);
  const [planet, setPlanet] = useState({});

  const fetchNextPlanet = useCallback(() => {
    const nextIndex = index < 15 ? index + 1 : 2;
    getPlanetByID(nextIndex)
      .then((resp) => {
        setPlanet(resp);
        setIndex(nextIndex);
      })
      .catch((err) => setIndex(nextIndex));
  }, [index]);

  const onClick = useCallback(() => {
    fetchNextPlanet();
  }, [fetchNextPlanet]);

  useEffect(() => {
    fetchNextPlanet();
  }, []);

  const { img, name, diameter, gravity, population } = planet;

  return (
    <div className="card">
      <div className="item-details">
        <img alt="planet-img" className="item-image" src={img} />
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
      <Button onClick={onClick} />
    </div>
  );
};

export default PlanetDetails;
