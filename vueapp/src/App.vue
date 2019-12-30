<template>
  <div id="app">
    <HelloWorld/>
    <DataBinding/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import DataBinding from './components/Databinding'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DataBinding
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
