<template>
  <div class="logo">
    <router-link :to="{ name: 'dashboard' }">
      <img :src="LogoSvg" alt="logo" />
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
import LogoSvg from '@/assets/logo.png'

export default {
  name: 'Logo',
  components: {},
  props: {
    title: {
      type: String,
      default: 'BOILERPLATE-VUE',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data() {
    return {
      LogoSvg
    }
  }
}
</script>
