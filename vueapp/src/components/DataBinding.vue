<template>
    <div class="databinding page">
      <h2>Data Binding</h2>
      <a v-bind:href="website" v-bind:title="website" target="_blank">Link Github</a>
      <input class="d-block" type="text" v-bind:value="job">
      <p>Họ tên: {{ name }}</p>
      <input v-model="name" placeholder="Nhập họ tên">
      <p>Nhập văn bản:</p>
      <p>{{paragraph}}</p>
      <textarea v-model="paragraph"></textarea>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      name: '',
      job: 'Fresher Dev',
      website: 'https://github.com/hoangha-fedev/VueJS',
      paragraph: ''
    }
  }
}
</script>

<style scoped>
.d-block{display: block}

input, textarea{margin: 5px auto}

.paragraph{white-space: pre-line;display: block;}
</style>