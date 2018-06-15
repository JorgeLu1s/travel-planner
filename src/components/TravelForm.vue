<template>
  <v-container grid-list-md>
    <h2>{{trip.name}} Trip</h2>
    <v-text-field v-model="trip.name" label="Trip name"></v-text-field>
    <h2>Resources</h2>
    <div v-for="resource in trip.resources">
      <ResourceItem :resource="resource" ></ResourceItem>
    </div>
    <v-btn color="success" v-on:click="addResource">Add Resource</v-btn>
    <h2>Travelers</h2>
    <div v-for="traveler in trip.travelers">
      <TravelerItem :traveler="traveler" ></TravelerItem>
    </div>
    <v-btn color="success" v-on:click="addTraveler">Add Traveler</v-btn>
    <v-btn v-on:click="create">Create</v-btn>
  </v-container>
</template>

<script>
import ResourceItem from './ResourceItem'
import TravelerItem from './TravelerItem'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'TravelForm',
  components: {
    ResourceItem,
    TravelerItem
  },

  computed: {
    ...mapGetters({
      trip: 'getTrip'
    })
  },

  methods: {
    ...mapActions({
      addResource: 'addResource',
      addTraveler: 'addTraveler',
    }),

    create: function () {
      this.$store.dispatch('createTrip')
      this.$router.push('/')
    }
  }
}
</script>
