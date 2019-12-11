<template>
  <a-breadcrumb class="breadcrumb">
    <a-breadcrumb-item v-for="item in breadList" :key="item.name">
      <router-link
        v-if="item.name !== name && !item.meta.unclickable"
        :to="{ path: item.path === '' ? '/' : item.path }"
        >{{ $t(item.meta.title) }}</router-link
      >
      <span v-else>{{ $t(item.meta.title) }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      breadList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      this.breadList = []
      // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})

      this.name = this.$route.name
      this.$route.matched.forEach(item => {
        // item.name !== 'index' && this.breadList.push(item)
        this.breadList.push(item)
      })

      if (this.$route.meta.beforeBreadcrumbs) {
        this.breadList.splice(this.breadList.length - 1, 0, ...this.$route.meta.beforeBreadcrumbs)
      }
    }
  }
}
</script>

<style scoped></style>
