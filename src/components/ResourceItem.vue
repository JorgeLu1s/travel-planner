<template>
  <v-layout row wrap>
    <v-flex sm5>
      <v-text-field v-model="resource.name" label="name"></v-text-field>
    </v-flex>
    <v-flex sm5>
      <v-text-field v-model.number="resource.price" label="price"></v-text-field>
    </v-flex>
    <v-flex sm2>
      <v-btn fab dark small color="error" v-on:click="remove(resource)">&times;</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ResourceItem',
  props: ['resource'],
  methods: {
    remove: function (resource) {
      this.$store.dispatch('removeResource', resource)
    }
  }
}
</script>
