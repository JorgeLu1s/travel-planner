<template>
  <v-container>
    <h2>Trips</h2>
    <v-list two-line>
      <v-list-tile v-for="trip in trips" :key="trip.name">
        <v-list-tile-content>
          <v-list-tile-title>{{ trip.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ trip.total }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon ripple>i</v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'TravelList',
  computed: {
    ...mapGetters({
      trips: 'getTrips'
    })
  },
  methods: {
    ...mapActions({
      fetchTrips: 'fetchTrips'
    })
  },
  created () {
    this.fetchTrips()
  }
}
</script>
