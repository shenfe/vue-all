<template>
  <div id="app">
    <Header :current="activeNav" :links="navs" />
    <keep-alive :exclude="/Detail/">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      navs: [
        { alias: 'list', text: 'list' },
        { alias: 'about', text: 'about' }
      ]
    }
  },
  computed: {
    activeNav: function () {
      return this.$route.name
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
