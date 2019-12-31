<template>
    <div>
        <h1>Methods</h1>
        <div>{{ sayHello(message) }}</div>
    </div>
</template>

<script>
export default {
    name: 'Methods',
    data () {
        return {
            message: 'This is text'
        }
    },
    methods:{
        sayHello(text) {
            return text.toUpperCase()
        }
    }
}
</script>