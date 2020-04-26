<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
    <!-- {{form.rules}} -->
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: { // 需要校验的字段项
      type: String
    }
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  mounted() {
    this.$on('validate', this.validate); // 监听到以后做校验
  },
  created() {
    console.log(this.prop);
    
  },
  methods: {
    // 做校验
    validate() {
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];
      // npm i async-validator -S
      const describe = {[this.prop]: rules};
      const schema = new Schema(describe);
      // 这里return的是校验结果的promise对象
      return schema.validate({[this.prop]: value}, errors => {
        if(errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = '';
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
