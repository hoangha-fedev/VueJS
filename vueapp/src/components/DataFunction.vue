<template>
  <div>
    <h2>Data Function</h2>
    <button v-on:click="count += 1">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'DataFunction',
  data () {
    return {
      count: 0
    }
  }
}
</script>