<template>
    <div class="lifecycle-hooks page">
        <h1>Lifecycle Hooks</h1>
        <div>{{ hello }}</div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'LifecycleHooks',
        data () {
            return {
                hello: 'Welcome to Lifecycle Hook',
                books: 0
            }
        },
        props: {
            msg: String
        },
        beforeCreate() {
            // alert('beforeCreate hook has been called');
            console.log('beforeCreate hook has been called')
        },
        created() {
            // alert('Created hook has been called');
            console.log(`book is of type ${typeof this.books}`)
        },
        beforeMount() {
            // alert('beforeMounted is called');
            console.log('beforeMounted is called')
        },
        mounted() {
            // alert('mounted has been called');
            this.$data.hello = 'hello';
            console.log(this.$data.hello)
        },
        beforeUpdate(){
            // alert('beforeUpdate hook has been called');
            console.log('beforeUpdate hook has been called');
        },
        update() {
            alert('Updated hook has been called');
            console.log('Updated hook has been called')
        },
        beforeDestroy() {
            this.books = null
            delete this.books
            console.log(this)
        },
        destroyed() {
            this.$destroy()
            console.log(this)
        }
    }
</script>
