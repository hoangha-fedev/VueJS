<template>
    <div class="stylebinding">
        <h1 v-bind:style="[colorValue, borderValue, paddingValue]">Welcome to Style Binding</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'StyleBinnding',
        data () {
            return {
                colorValue: {
                    color: 'red'
                },
                borderValue: {
                    //sanke_case
                    'border-bottom' : '1px solid red'
                },
                paddingValue: {
                    //camelCase
                    paddingBottom: '10px'
                }
            }
        }
    }
</script>