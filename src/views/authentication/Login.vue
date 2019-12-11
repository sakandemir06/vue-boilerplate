<template>
  <div class="main">
    <a-form id="formLogin" ref="formLogin" class="user-layout-login" :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                { required: true, message: $t('E-posta adresinizi giriniz') },
                { type: 'email', message: $t('Lütfen uygun formatta bir e-posta adresi giriniz.') }
              ],
              validateTrigger: 'change'
            }
          ]"
          size="large"
          type="text"
          :placeholder="$t('E-posta')"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Parola giriniz' }], validateTrigger: 'blur' }
          ]"
          size="large"
          type="password"
          autocomplete="false"
          placeholder="Parola"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input>
      </a-form-item>

      <a-form-item style>
        <a-button
          size="large"
          type="primary"
          html-type="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
          >{{ $t('Giriş') }}</a-button
        >
      </a-form-item>

      <div class="user-login-other">
        <router-link class="register" :to="{ name: 'register' }">{{ $t('Kayıt Ol') }}</router-link>
        <router-link :to="{ name: 'recover', params: { user: 'aaa' } }" class="forge-password" style="float: right;">{{
          $t('Şifremi Unuttum')
        }}</router-link>
      </div>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      customActiveKey: 'tab1',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  created() {},
  methods: {
    ...mapActions(['Login', 'Logout']),
    handleSubmit(e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        Login
      } = this

      state.loginBtn = true

      const validateFieldsKey = ['email', 'password']

      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          const loginParams = { ...values }
          Login(loginParams)
            .then(res => this.loginSuccess(res))
            .finally(() => {
              state.loginBtn = false
            })
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    loginSuccess() {
      this.$router.push({ path: '/' })
      this.isLoginError = false
    }
  }
}
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;
    display: flex;
    justify-content: space-between;
    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
