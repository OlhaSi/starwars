import React, { useCallback, useEffect, useState } from "react";
import Button from "../button/button";

import { getStarshipByID } from "../../services/sw-service";
import "./starship-details.css";

const StarshipDetails = () => {
  const [index, setIndex] = useState(8);
  const [starship, setStarship] = useState({});

  const fetchNextStarship = useCallback(() => {
    const nextIndex = index < 13 ? index + 1 : 9;
    getStarshipByID(nextIndex)
      .then((resp) => {
        setStarship(resp);
        setIndex(nextIndex);
      })
      .catch((err) => setIndex(nextIndex));
  }, [index]);

  const onClick = useCallback(() => {
    fetchNextStarship();
  }, [fetchNextStarship]);

  useEffect(() => {
    fetchNextStarship();
  }, []);

  const { img, name, model, length, passengers } = starship;

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
      <Button onClick={onClick} />
    </div>
  );
};

export default StarshipDetails;
