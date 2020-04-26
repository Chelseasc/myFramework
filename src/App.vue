<template>
  <div id="app">
    <FormSample></FormSample>
  </div>
</template>

<script>
// import ShoppingCart from './components/ShoppingCart.vue'
import FormSample from './components/Form/index'

export default {
  components: {
    FormSample
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
