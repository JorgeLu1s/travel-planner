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

export default {
  name: 'TravelForm',
  components: {
    ResourceItem,
    TravelerItem
  },

  data () {
    return {
      trip: {
        name: 'New',
        total: 0,
        individual: 0,
        resources: [{name: '', price: 0}],
        travelers: [{name: ''}]
      }
    }
  },

  methods: {
    addResource: function () {
      this.trip.resources.push({name: '', price: 0})
    },

    addTraveler: function () {
      this.trip.travelers.push({name: ''})
    },

    create: function () {
      var total = 0

      this.trip.resources.forEach(resource => { total += resource.price })
      this.trip.total = total
      this.trip.individual = total / this.trip.travelers.length

      this.$store.dispatch('createTrip', this.trip)
      this.$router.push('/')
    }
  }
}
</script>
