import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trips: [],
    resources: [{name: '', price: 0}],
    travelers: []
  },

  getters: {
    getTrips (state) {
      return state.trips
    },

    getResources (state) {
      return state.resources
    },

    getTravelers (state) {
      return state.travelers
    }
  },

  actions: {
    addResource ({commit}) {
      commit('addResource')
    },

    removeResource ({commit}, resource) {
      commit('removeResource', resource.name)
    },

    addTraveler ({commit}) {
      commit('addTraveler')
    },

    removeTraveler ({commit}, traveler) {
      commit('removeTraveler', traveler.name)
    },

    fetchTrips ({commit}) {
      const trip = {
        name: 'Baru',
        total: 190000,
        individual: 63000,
        travelers: [{name: 'jorge'}, {name: 'migue'}, {name: 'wen'}],
        resources: [{name: 'hotel', price: 130000}, {name: 'gasolina', price: 60000}]
      }
      commit('pushTrip', trip)
    },

    createTrip ({commit}, trip) {
      commit('pushTrip', trip)
    }
  },

  mutations: {
    addResource (state) {
      state.resources.push({name: '', price: 0})
    },

    addTraveler (state) {
      state.travelers.push({name: ''})
    },

    removeResource (state, resource) {
      state.resources = state.resources.filter((item) => item.name !== resource)
    },

    removeTraveler (state, traveler) {
      state.travelers = state.travelers.filter((item) => item.name !== traveler)
    },

    pushTrip (state, trip) {
      state.trips.push(trip)
    }
  }
})

