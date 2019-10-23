<template>
  <el-row
    type="flex"
    justify="center"
    align="middle"
    style="height: 100%;"
  >
    <el-col :span="8">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="120px"
        label-position="left"
      >
        <el-form-item label-width="0" style="text-align: center;">
          <h3>vue2-shopping-cart-demo</h3>
          <h4>fake login page</h4>
        </el-form-item>
        <el-form-item label="username" prop="username">
          <el-input
            v-model="loginForm.username"
            clearable
            placeholder="any"
          />
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            clearable
            placeholder="any"
          />
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center;">
          <el-button
            @click="handleClickLogin"
            type="primary"
            size="small"
          >
            Login
          </el-button>
          <el-button
            @click="handleClickReset"
            size="small"
          >
            Reset
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: 'Please input your username', trigger: 'blur' },
          { min: 3, max: 5, message: 'between 3 and 5', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input your password', trigger: 'blur' },
          { min: 3, max: 5, message: 'between 3 and 5', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClickLogin () {
      this.$refs.loginForm.validate((isValid) => {
        if (isValid) {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          this.$store.dispatch('loginAsync')
            .then(({ suc, msg, token }) => {
              if (suc) {
                this.$notify({
                  title: 'Success',
                  message: 'Login successfully.',
                  type: 'success'
                })
                this.$router.replace({ name: 'list' })
              } else {
                this.$notify({
                  title: 'Error',
                  message: msg,
                  type: 'error'
                })
              }
              loading.close()
            })
        } else {
          return false
        }
      })
    },
    handleClickReset () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
