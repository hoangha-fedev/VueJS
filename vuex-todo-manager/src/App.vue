<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FilterTodos/>
      <Todos/>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import FilterTodos from './components/FilterTodos'

export default {
  name: 'App',
  components: {
    Todos, AddTodo, FilterTodos
  }
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7fe
}

.container {
  max-width: 1200px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem
}
</style>
