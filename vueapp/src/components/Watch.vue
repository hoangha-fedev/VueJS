<template>
    <div class="watch">
        <h1>Watch</h1>
        <div>Message type: {{ message.type }}</div>
        <div>Message text: {{ message.text }}</div>
        <div><button @click="changeType">Change type</button></div>
        <div><button @click="changeText">Change text</button></div>
    </div>
</template>

<script>
export default {
    name: 'Watch',
    data () {
        return {
            message: {
                type: 'Greeting',
                text: 'How are you?'
            }
        }
    },
    methods: {
            changeType() {
                this.message.type = 'This is new type'
            },
            changeText() {
                this.message.text = 'This is new text'
            }
        },
    computed: {
        getType() {
            return this.message.type
        },
        getText() {
            return this.message.text
        }
    },
    watch: {
        gettype() {
            console.log('type changed')
        },
        getText() {
            console.log('text changed')
        }
    }
}
</script>