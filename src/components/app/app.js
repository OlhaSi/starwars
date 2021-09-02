import React, { Component } from 'react';

import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';
import Header from '../header';

import './app.css';

export default class App extends Component {

    state = {
        personPage: true,
        planetPage: false,
        starshipPage: false
    }

    onPersonChange = () => {
        this.setState({
            personPage:true,
            planetPage: false,
            starshipPage: false
        });
    }
    onPlanetChange = () => {
        this.setState({
            planetPage:true,
            personPage: false,
            starshipPage: false
            
        });
    }
    onStarshipChange = () => {
        this.setState({
            starshipPage:true,
            personPage: false,
            planetPage: false,
        });
    }

    render() {
        const {personPage, planetPage, starshipPage} = this.state;

        const person =  personPage ? <PersonDetails/> : null;
        const planet = planetPage ? <PlanetDetails/> : null;
        const starship = starshipPage ? <StarshipDetails/> : null;

        return (
        <div>
            <Header 
                onPersonChange = {this.onPersonChange}
                onPlanetChange = {this.onPlanetChange}
                onStarshipChange = {this.onStarshipChange}/>
            {person}
            {planet}
            {starship}
        </div>
        );
    }
}