<template>
  <div class="box" v-if="isShow">
      <h3>{{title}}</h3>
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String, 
            default: ''
        },
        message: {
            type: String, 
            default: ''
        },
        duration: {
            type: Number, 
            default: 1000
        }
    },
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        show() {
            this.isShow = true;
            setTimeout(this.hide, this.duration);
        },
        hide() {
            this.isShow = false;
            this.remove(); // 即create.js里的remove()
        }
    }
}
</script>

<style scoped>
    .box {
        width: 200px;
        height: 100px;
        background: #fff;
        border: 1px solid #dbdbdb;
        margin: 0 auto;
        position: absolute;
        top: 100px;
        left: 40%;
        color: #1a1a1a; 
        text-align: center;
    }
</style>