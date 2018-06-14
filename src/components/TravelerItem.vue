<template>
  <v-layout row wrap>
    <v-flex sm5>
      <v-text-field v-model="traveler.name" label="name"></v-text-field>
    </v-flex>
    <v-flex sm2>
      <v-btn fab dark small color="error" v-on:click="remove(traveler)">&times;</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'travelerItem',
  props: ['traveler'],
  methods: {
    remove: function (traveler) {
      this.$store.dispatch('removeTraveler', traveler)
    }
  }
}
</script>
