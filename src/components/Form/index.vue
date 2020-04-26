<template>
  <div>
    <h3>表单</h3>
    <sc-form :model="model" :rules="rules" ref="loginForm">
      <sc-form-item label="用户名" prop="username">
        <sc-input v-model="model.username" autocomplete="off" placeholder="请输入用户名"></sc-input>
      </sc-form-item>
      <sc-form-item label="密码" prop="password">
        <sc-input type="password" v-model="model.password" autocomplete="off"></sc-input>
      </sc-form-item>
      <sc-form-item>
        <button @click="submitForm('loginForm')">提交</button>
      </sc-form-item>
    </sc-form>
    {{model}}

  </div>
</template>

<script>
import ScForm from './Form';
import ScFormItem from './FormItem';
import ScInput from './Input';
export default {
  components: {
    ScForm,
    ScFormItem,
    ScInput
  },
  props: {
  },
  data() {
    return {
      model: {
        username: 'sc', 
        password: 'admin123'
      },
      rules: {
        username: [{required: true, message: '请输入'}],
        password: [{required: true, message: '请输入'}],
      }
    }
  },
  methods: {
    submitForm(form) {
      this.$refs[form].handleValidate(valid => {
        if(valid) {
          alert('请求登录');
        } else {
          alert('校验失败');
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
