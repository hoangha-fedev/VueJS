<template>
    <div class="form-input-binding">
        <h1>Form Input Binding</h1>
        <div class="text">
            {{ message }}
        </div>
        <div class="input-form">
            <h2>Input</h2>
            <input type="text" v-model="message"> <br>
            <h2>Radio</h2>
            <input type="radio" v-model="message" value="one">
            <input type="radio" v-model="message" value="two"> <br>
            <h2>Select</h2>
            <select v-model="message">
                <option disabled="">Choose one</option>
                <option value="one">One</option>
                <option value="two">Two</option>
            </select> <br>
            <select v-model="message">
                <option disabled="">Choose one</option>
                <option :value="values.one">One</option>
                <option :value="values.two">Two</option>
            </select> <br>
            <!-- <h2>Value, Placeholder</h2>
            <input type="text" :placeholder="placeholder" :value="value">
            <input type="number" v-model.number="message" >
            <input type="number" v-model.trim="message"> -->
        </div>  
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '',
                values: {
                    one: 'This is one',
                    two: 'This is two'
                },
                placeholder: 'This is placeholder',
                value: 'This is value'
            }
        }
    }
</script>