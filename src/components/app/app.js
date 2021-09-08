import React, { useCallback, useState } from "react";

import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import StarshipDetails from "../starship-details";
import Header from "../header";

import "./app.css";

const App = () => {
  const [person, setPerson] = useState(true);
  const [planet, setPlanet] = useState(false);
  const [starship, setStarship] = useState(false);

  const onPersonChange = useCallback((e) => {
    e.preventDefault();

    setPerson(true);
    setPlanet(false);
    setStarship(false);
  }, []);

  const onPlanetChange = useCallback((e) => {
    e.preventDefault();

    setPerson(false);
    setPlanet(true);
    setStarship(false);
  }, []);

  const onStarshipChange = useCallback((e) => {
    e.preventDefault();

    setPerson(false);
    setPlanet(false);
    setStarship(true);
  }, []);

  return (
    <div>
      <Header
        onPersonChange={onPersonChange}
        onPlanetChange={onPlanetChange}
        onStarshipChange={onStarshipChange}
      />
      {person && <PersonDetails />}
      {planet && <PlanetDetails />}
      {starship && <StarshipDetails />}
    </div>
  );
};

export default App;
