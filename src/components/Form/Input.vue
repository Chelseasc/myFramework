<template>
  <div>
    <input 
      :value="value"
      @input="handleInput"
      v-bind="$attrs"
    >
  </div>
</template>

<script>
// v-bind="$attrs"相当于属性展开运算符，即把父组件传过来的属性直接展开
export default {
  inheritAttrs: false, // 由父类继承下来的属性比如autocomplete就消失了（具体看控制台页面元素）
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
      // 派发事件让父组件执行校验
      this.$parent.$emit('validate');
    }
  }
}
</script>

<style scoped>
</style>
