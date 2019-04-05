import Vuex from 'vuex'
const axios = require('axios');


const createStore = () => {
  return new Vuex.Store({
    state: {
      number_planets: 0,
      current_number_planet: 1,
      current_planet_info : {
        name: "",
        rotation_period: "",
        orbital_period: "",
        diameter: "",
        climate: "",
        gravity: "",
        terrain: "",
        surface_water: "",
        population: "",
      }
    },
    mutations: {
      change_number_planet (state, id) {
        state.current_number_planet = id
      },
      async setup_planet(state){
        let { data } = await axios.get(`https://swapi.co/api/planets`)

       state.number_planets = data.count;
      },
      async get_info_planet(state, id){

        let { data } = await axios.get(`https://swapi.co/api/planets/` + id.toString() )


        state.current_planet_info.name = data.name;
        state.current_planet_info.rotation_period = data.rotation_period;
        state.current_planet_info.orbital_period = data.orbital_period;
        state.current_planet_info.diameter = data.diameter;
        state.current_planet_info.climate = data.climate;
        state.current_planet_info.gravity = data.gravity;
        state.current_planet_info.terrain = data.terrain;
        state.current_planet_info.surface_water = data.surface_water;
        state.current_planet_info.population = data.population;
      }

    }
  })
}

export default createStore
