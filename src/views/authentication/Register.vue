<template>
  <div class="main user-layout-register">
    <h3>
      <span>Bize Katıl!</span>
    </h3>
    <a-form id="formRegister" ref="formRegister" :form="form">
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                { required: true, message: 'E-posta adresinizi giriniz' },
                { type: 'email', message: 'Lütfen uygun formatta bir e-posta adresi giriniz.' }
              ],
              validateTrigger: ['change', 'blur']
            }
          ]"
          size="large"
          type="text"
          placeholder="E-posta"
        ></a-input>
      </a-form-item>

      <a-popover
        v-model="state.passwordLevelChecked"
        placement="rightTop"
        :trigger="['focus']"
        :get-popup-container="trigger => trigger.parentElement"
      >
        <template slot="content">
          <div :style="{ width: '240px' }">
            <div :class="['user-register', passwordLevelClass]">
              Güç:
              <span>{{ passwordLevelName }}</span>
            </div>
            <a-progress :percent="state.percent" :show-info="false" :stroke-color="passwordLevelColor" />
            <div style="margin-top: 10px;">
              <span>Lütfen en az 8 karakter giriniz. Parolanızda harf, karakter ve rakam kullanmanızı öneririz.</span>
            </div>
          </div>
        </template>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { min: 8, message: 'Parolanız en az 8 karakterden oluşmalıdır.' },
                  { validator: handlePasswordLevel }
                ],
                validateTrigger: ['change', 'blur']
              }
            ]"
            size="large"
            type="password"
            autocomplete="false"
            placeholder="Parola"
            @click="handlePasswordInputClick"
          ></a-input>
        </a-form-item>
      </a-popover>

      <a-form-item>
        <a-input
          v-decorator="[
            'password2',
            {
              rules: [{ required: true, message: 'Parola tekrarı zorunludur' }, { validator: handlePasswordCheck }],
              validateTrigger: ['change', 'blur']
            }
          ]"
          size="large"
          type="password"
          autocomplete="false"
          placeholder="Parola tekrarı"
        ></a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
            'name',
            {
              rules: [{ required: true, message: 'Adınızı giriniz' }],
              validateTrigger: ['change', 'blur']
            }
          ]"
          size="large"
          autocomplete="false"
          placeholder="Ad"
        ></a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
            'surname',
            {
              rules: [{ required: true, message: 'Soyadınızı giriniz' }],
              validateTrigger: ['change', 'blur']
            }
          ]"
          size="large"
          autocomplete="false"
          placeholder="Soyad"
        ></a-input>
      </a-form-item>

      <a-form-item>
        <a-textarea
          v-decorator="[
            'address',
            {
              rules: [{ required: true, message: 'Adresinizi giriniz' }],
              validateTrigger: ['change', 'blur']
            }
          ]"
          style="font-size:16px"
          :rows="3"
          autocomplete="false"
          placeholder="Adres"
        ></a-textarea>
      </a-form-item>

      <a-form-item>
        <a-select
          v-decorator="['province', { rules: [{ required: true, message: 'Lütfen İl seçiniz' }] }]"
          show-search
          show-arrow
          :filter-option="$filterOption"
          size="large"
          placeholder="İl"
          @change="handleChangeProvince"
        >
          <a-select-option v-for="province in provinces" :key="province.id + '_province'" :value="province.id">{{
            province.name
          }}</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item>
        <a-select
          :key="selectedProvince"
          v-decorator="['county', { rules: [{ required: true, message: 'Lütfen İlçe seçiniz' }] }]"
          show-search
          :disabled="!counties.length"
          show-arrow
          :filter-option="$filterOption"
          size="large"
          placeholder="İlçe"
          @change="handleChangeCounty"
        >
          <a-select-option v-for="county in counties" :key="county.id + '_county'" :value="county.id">{{
            county.name
          }}</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
            'mobile',
            {
              rules: [
                {
                  required: true,
                  message: 'Geçerli bir telefon  numarası giriniz',
                  pattern: /(([\+]90?)|([0]?))([ ]?)((\([0-9]{3}\))|([0-9]{3}))([ ]?)([0-9]{3})(\s*[\-]?)([0-9]{2})(\s*[\-]?)([0-9]{2})/
                },
                { max: 10, message: 'En fazla 11 karakter girebilirsiniz' }
              ],
              'validate-trigger': ['change', 'blur']
            }
          ]"
          size="large"
          placeholder="Telefon Numarası"
        >
          <a-select slot="addonBefore" size="large" default-value="+90">
            <a-select-option value="+90">+90</a-select-option>
          </a-select>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'company_name',
            {
              rules: [{ required: true, message: 'Firma adı giriniz' }],
              validateTrigger: ['change', 'blur']
            }
          ]"
          size="large"
          autocomplete="false"
          placeholder="Firma Adı"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-select
          v-decorator="['sectors', { rules: [{ required: true, message: 'Lütfen en az 1 adet sektör seçiniz' }] }]"
          show-search
          show-arrow
          :filter-option="$filterOption"
          mode="multiple"
          size="large"
          placeholder="Sektörler"
          @change="handleChangeSector"
        >
          <a-select-option v-for="sector in sectors" :key="sector.id" :value="sector.id">{{
            sector.name
          }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-input-number
          v-decorator="[
            'tax_no',
            {
              rules: [{ required: true, message: 'Vergi no giriniz' }],
              validateTrigger: ['change', 'blur']
            }
          ]"
          style="width:100%"
          size="large"
          autocomplete="false"
          placeholder="Vergi No"
        ></a-input-number>
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
            'tax_name',
            {
              rules: [{ required: true, message: 'Vergi Dairesi giriniz' }],
              validateTrigger: ['change', 'blur']
            }
          ]"
          size="large"
          autocomplete="false"
          placeholder="Vergi Dairesi"
        ></a-input>
      </a-form-item>

      <a-form-item>
        <a-input-number
          v-decorator="[
            'vehicle_count',
            {
              rules: [{ required: true, message: 'Araç Adedi giriniz' }],
              validateTrigger: ['change', 'blur']
            }
          ]"
          style="width: 100%"
          size="large"
          autocomplete="false"
          placeholder="Araç Adedi"
        ></a-input-number>
      </a-form-item>
      <a-form-item>
        <a-button
          size="large"
          type="primary"
          html-type="submit"
          class="register-button"
          :loading="registerBtn"
          :disabled="registerBtn"
          @click.stop.prevent="handleSubmit"
          >{{ $t('Kayıt Ol') }}</a-button
        >
        <router-link class="login" :to="{ name: 'login' }">{{ $t('Zaten Üyeyim') }}</router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mixinDevice } from '@/utils/mixin.js'

const levelNames = {
  0: 'Güçsüz',
  1: 'Yetersiz',
  2: 'Normal',
  3: 'Güçlü'
}
const levelClass = {
  0: 'error',
  1: 'error',
  2: 'warning',
  3: 'success'
}
const levelColor = {
  0: '#ff0000',
  1: '#ff0000',
  2: '#ff7e05',
  3: '#52c41a'
}
export default {
  name: 'Register',
  components: {},
  mixins: [mixinDevice],
  data() {
    return {
      form: this.$form.createForm(this),
      selectedSectors: [],
      selectedProvince: null,
      selectedCounty: null,
      papersChecked: false,
      state: {
        time: 60,
        smsSendBtn: false,
        passwordLevel: 0,
        passwordLevelChecked: false,
        percent: 10,
        progressColor: '#FF0000'
      },
      registerBtn: false
    }
  },
  computed: {
    ...mapGetters({
      sectors: 'helper/sectors',
      provinces: 'helper/provinces',
      counties: 'helper/counties',
      papers: 'helper/papers'
    }),
    passwordLevelClass() {
      return levelClass[this.state.passwordLevel]
    },
    passwordLevelName() {
      return levelNames[this.state.passwordLevel]
    },
    passwordLevelColor() {
      return levelColor[this.state.passwordLevel]
    }
  },
  created() {
    this.getHelpers()
  },
  methods: {
    ...mapActions({
      Register: 'Register',
      Login: 'Login',
      getSectors: 'helper/GetSectors',
      getProvinces: 'helper/GetProvinces',
      getCounties: 'helper/GetCounties',
      getPapers: 'helper/GetPapers'
    }),
    handleCheckChange(e) {
      const {
        target: { checked }
      } = e
      this.papersChecked = checked
    },
    getHelpers() {
      this.getSectors()
      this.getProvinces()
      this.getPapers()
    },
    handleChangeSector(value) {
      this.selectedSectors = value
    },
    handleChangeProvince(value) {
      this.selectedCounty = null
      this.selectedProvince = value
      this.getCounties(this.selectedProvince)
    },
    handleChangeCounty(value) {
      this.selectedCounty = value
    },
    handlePasswordLevel(rule, value, callback) {
      let level = 0
      if (/[0-9]/.test(value)) {
        level++
      }
      if (/[a-zA-Z]/.test(value)) {
        level++
      }
      if (/[^0-9a-zA-Z_]/.test(value)) {
        level++
      }
      this.state.passwordLevel = level
      this.state.percent = level * 30
      if (level >= 2) {
        if (level >= 3) {
          this.state.percent = 100
        }
        callback()
      } else {
        if (level === 0) {
          this.state.percent = 10
        }
        callback(new Error('Parolanızda en az bir adet harf ve rakam kullanmalısınız'))
      }
    },

    handlePasswordCheck(rule, value, callback) {
      const password = this.form.getFieldValue('password')
      if (value === undefined) {
        callback(new Error('Parola tekrarı girmelisiniz'))
      }
      if (value && password && value.trim() !== password.trim()) {
        callback(new Error('Parola tekrarı uyuşmuyor'))
      }
      callback()
    },

    handlePasswordInputClick() {
      if (!this.isMobile()) {
        this.state.passwordLevelChecked = true
        return
      }
      this.state.passwordLevelChecked = false
    },

    handleSubmit() {
      const {
        form: { validateFields },
        state
      } = this
      validateFields({ force: true }, (err, values) => {
        if (!err) {
          if (!this.papersChecked) {
            this.$notification.error({
              message: this.$t('Hata'),
              description: this.$t('Kayıt olmak için sözleşmeleri onaylamalısınız!')
            })
          } else {
            this.registerBtn = true
            const data = {
              title: values.company_name,
              address: values.address,
              gsm: values.mobile,
              email: values.email,
              phone: values.mobile,
              tax_office: values.tax_name,
              tax_no: values.tax_no,
              vehicle_count: values.vehicle_count,
              county_id: this.selectedCounty,
              province_id: this.selectedProvince,
              sectors: this.selectedSectors,
              name: values.name,
              surname: values.surname,
              password: values.password,
              password_confirmation: values.password2
            }
            state.passwordLevelChecked = false
            this.Register(data)
              .then(() => {
                this.$notification.success({
                  message: this.$t('Kayıt Başarılı!'),
                  description: this.$t('Hesabınız onaylandıktan sonra giriş yapabilirsiniz')
                })
                this.$router.push({ path: '/user/login' })
              })
              .finally(() => {
                this.registerBtn = false
              })
          }
        }
      })
    }
  }
}
</script>
<style lang="less">
.user-register {
  &.error {
    color: #ff0000;
  }

  &.warning {
    color: #ff7e05;
  }

  &.success {
    color: #52c41a;
  }
}

.user-layout-register {
  width: 450px !important;
  .ant-input-group-addon:first-child {
    background-color: #fff;
  }
}
</style>
<style lang="less" scoped>
.user-layout-register {
  & > h3 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .register-button {
    width: 50%;
  }

  .login {
    float: right;
    line-height: 40px;
  }
}
</style>
