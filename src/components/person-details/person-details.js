import React, { useCallback, useEffect, useState } from "react";
import Button from "../button/button";

import { getPersonByID } from "../../services/sw-service";
import "./person-details.css";

const PersonDetails = () => {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState({});

  const fetchNextPerson = useCallback(() => {
    const nextIndex = index < 15 ? index + 1 : 1;
    getPersonByID(nextIndex)
      .then((resp) => {
        setPerson(resp);
        setIndex(nextIndex);
      })
      .catch((err) => setIndex(nextIndex));
  }, [index]);

  const onClick = useCallback(() => {
    fetchNextPerson();
  }, [fetchNextPerson]);

  useEffect(() => {
    fetchNextPerson();
  }, []);

  const { img, name, gender, birth_year, eye_color } = person;

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
      <Button onClick={onClick} />
    </div>
  );
};

export default PersonDetails;
