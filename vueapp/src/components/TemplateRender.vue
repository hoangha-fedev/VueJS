<template>
    <div class="templaterender">
        <ul class="tabs">
            <li @click="changeTabs('login')">Login</li>
            <li @click="changeTabs('register')">Register</li>
        </ul>
        <div class="login" v-if="tabSelected === 'login'">
            <h2>Form Đăng Nhập</h2>
            <form action="">
                <input type="text" placeholder="Nhập username">
                <input type="password" placeholder="Nhập password">
            </form>
        </div>
        <div class="register" v-else-if="tabSelected === 'register'">
            <h2>Form Đăng Ký</h2>
            <form action="">
                <input type="text" placeholder="Nhập username">
                <input type="password" placeholder="Nhập password">
                <input type="password" placeholder="Nhập lại password">
            </form>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'TemplateRender',
        data () {
            return {
                tabSelected: 'login'
            }
        },
        methods: {
            changeTabs(tab) {
                this.tabSelected = tab
            }
        }
    }
</script>

<style scoped>
    .tabs {margin:0; padding: 0}
    .tabs li{padding:10px 15px; cursor: pointer; display: inline-block; border: 1px solid red}    
    .login, .register {padding: 15px;margin-top: 20px; border: 2px solid #333}
</style>