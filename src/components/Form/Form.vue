<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this // props里的两个属性可以通过这个this传递给孙子
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleValidate(callback) {
      const tasks = this.$children.filter(item => item.prop) // 把有prop属性的过滤出来进行校验
      .map(item => item.validate())

      // 所有任务都通过才算校验通过
      Promise.all(tasks)
      .then(() => callback(true))
      .catch(() => callback(false));
    }
  }
}
</script>

<style scoped>
</style>
