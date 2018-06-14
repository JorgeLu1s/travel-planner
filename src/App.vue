<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title>Travel Planner</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to='/' >Trips</v-btn>
        <v-btn flat to='/new' >New</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
