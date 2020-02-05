<template>
  <div class="popup" :class="getClassPopup">
      <div class="rule">
          <h3>Luật chơi</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam provident numquam illum id harum, fuga facilis ex impedit, a nihil quam similique quas! Iure sed alias, sit soluta quod inventore.</p>
          <button @click="comfirm">Đã hiểu</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        isOpenPopup: {
            type: Boolean
        }
    },
    data(){
        return {

        }
    },
    computed:{
        getClassPopup(){
            return {
                'open': this.isOpenPopup
            }
        }
    },
    methods: {
        comfirm() {
            this.$emit('handleComfirm')
        }
    }
}
</script>

<style>
.popup{ position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); opacity: 0; visibility: hidden; transition: all ease 0.5s}
.popup.open{opacity: 1; visibility: visible;transition: all ease 0.5s}
.rule {
    width: 350px; padding: 20px; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; position: absolute; transition: all ease .5s
}
.rule h3 {margin-top: 10px;}
.rule button {cursor: pointer; margin-top: 20px; padding: 8px 15px; background-color: #fff; color: #333; transition: all ease .5s}
.rule button:hover{color: #fff; background-color: #333}
</style>