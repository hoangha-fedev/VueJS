<template>
  <div id="app">
    <!-- <HelloWorld/> <hr>
    <DataBinding/> <hr>
    <DataFunction/>
    <DataFunction/>
    <DataFunction/> <hr>
    <Methods/> <hr>
    <Watch/> <hr>
    <LifecycleHooks/> <hr>
    <StyleBinding/> <hr>
    <TemplateRender/> <hr>
    <ListRender/> <hr>
    <EventHandling/> <hr>
    <FormInputBinding/> <hr> -->
    <img src="./assets/logo.png" />
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/data-binding">Data Binding</router-link></li>
        <li><router-link to="/data-function">Data Function</router-link></li>
        <li><router-link to="/methods">Methods</router-link></li>
        <li><router-link to="/watch">Watch</router-link></li>
        <li><router-link to="/lifecycle-hooks">LifeCycle Hooks</router-link></li>
        <li><router-link to="/style-binding">Style Binding</router-link></li>
        <li><router-link to="/template-render">Template Render</router-link></li>
        <li><router-link to="/list-render">List Render</router-link></li>
        <li><router-link to="/event-handling">Event Handling</router-link></li>
        <li><router-link to="/form-input-binding">Form Input Binding</router-link></li>
        <li><router-link to="/coins/usd">Coins</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import DataBinding from './components/DataBinding'
// import DataFunction from './components/DataFunction'
// import Methods from './components/Methods'
// import Watch from './components/Watch'
// import LifecycleHooks from './components/LifecycleHooks'
// import StyleBinding from './components/StyleBinding'
// import TemplateRender from './components/TemplateRender'
// import ListRender from './components/ListRender'
// import EventHandling from './components/EventHandling'
// import FormInputBinding from './components/FormInputBinding'

export default {
  name: "App"
  // components: {
  //   HelloWorld,
  //   DataBinding,
  //   DataFunction,
  //   Methods,
  //   Watch,
  //   LifecycleHooks,
  //   StyleBinding,
  //   TemplateRender,
  //   ListRender,
  //   EventHandling,
  //   FormInputBinding,
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul{display: flex; justify-content: center; flex-wrap: wrap; padding-left: 0}
ul li{padding: 5px 10px; margin: 10px; border: 1px solid #333; background: #333; display: flex; align-items: center;justify-content: center; color: #fff}
ul li a{color:#fff; text-decoration: none; text-align: center}
ul li:hover{transition: all ease 0.5s; background: #fff;color:#333}
ul li:hover a{color:#333}
</style>
