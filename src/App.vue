<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script>
import trTR from 'ant-design-vue/lib/locale-provider/tr_TR'
import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire],
  data() {
    return {
      locale: trTR
    }
  },
  mounted() {}
}
</script>
<style>
#app {
  height: 100%;
}
</style>
