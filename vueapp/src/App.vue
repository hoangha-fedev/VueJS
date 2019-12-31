<template>
  <div id="app">
    <HelloWorld/> <hr>
    <DataBinding/> <hr>
    <DataFunction/>
    <DataFunction/>
    <DataFunction/> <hr>
    <Methods/> <hr>
    <Watch/> <hr>
    <LifecycleHooks/> <hr>
    <StyleBinding/> <hr>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import DataBinding from './components/DataBinding'
import DataFunction from './components/DataFunction'
import Methods from './components/Methods'
import Watch from './components/Watch'
import LifecycleHooks from './components/LifecycleHooks'
import StyleBinding from './components/StyleBinding'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DataBinding,
    DataFunction,
    Methods,
    Watch,
    LifecycleHooks,
    StyleBinding
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
