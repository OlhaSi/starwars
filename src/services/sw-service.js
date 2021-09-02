const { default: axios } = require("axios")

async function getPersonByID(nextIndex) {
    const resp = await axios.get(`https://swapi.dev/api/people/${nextIndex}`)
    return {
        img: `https://starwars-visualguide.com/assets/img/characters/${nextIndex}.jpg`,
        name: resp.data.name,
        gender: resp.data.gender,
        birth_year: resp.data.birth_year,
        eye_color: resp.data.eye_color
    }
}

async function getPlanetByID(nextIndex) {
    const resp = await axios.get(`https://swapi.dev/api/planets/${nextIndex }`)
    return {
        img: `https://starwars-visualguide.com/assets/img/planets/${nextIndex}.jpg`,
        name: resp.data.name,
        diameter: resp.data.diameter,
        gravity: resp.data.gravity,
        population: resp.data.population
    }
}

async function getStarshipByID(nextIndex) {
    const resp = await axios.get(`https://swapi.dev/api/starships/${nextIndex}`)
    return {
        img: `https://starwars-visualguide.com/assets/img/starships/${nextIndex}.jpg`,
        name: resp.data.name,
        model: resp.data.model,
        length: resp.data.length,
        passengers: resp.data.passengers
    }
}

export {getPersonByID, getPlanetByID, getStarshipByID};