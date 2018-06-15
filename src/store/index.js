import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trips: [],
    trip: {
      name: 'New',
      total: 0,
      individual: 0,
      resources: [{name: '', price: 0}],
      travelers: [{name: ''}]
    }
  },

  getters: {
    getTrips (state) {
      return state.trips
    },

    getTrip (state) {
      return state.trip
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

    createTrip ({commit}) {
      commit('pushTrip')
    }
  },

  mutations: {
    addResource (state) {
      state.trip.resources.push({name: '', price: 0})
    },

    addTraveler (state) {
      state.trip.travelers.push({name: ''})
    },

    removeResource (state, resource) {
      state.trip.resources = state.resources.filter((item) => item.name !== resource)
    },

    removeTraveler (state, traveler) {
      state.trip.travelers = state.travelers.filter((item) => item.name !== traveler)
    },

    pushTrip (state) {
      var total = 0

      state.trip.resources.forEach(resource => { total += resource.price })
      state.trip.total = total
      state.trip.individual = total / state.trip.travelers.length

      state.trips.push(state.trip)
    }
  }
})

