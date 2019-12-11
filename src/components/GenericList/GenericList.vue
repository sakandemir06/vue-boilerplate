<template>
  <span>
    <span v-for="(data, index) in dataSet" :key="data.id">{{ index > 0 ? ', ' + data.name : data.name }}</span>
  </span>
</template>

<script>
export default {
  props: {
    endpoint: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedItem: null,
      dataSet: []
    }
  },
  mounted() {
    this.$http.get(this.endpoint).then(res => {
      this.dataSet = res.data.filter(item => {
        return this.items.find(inlineItem => inlineItem === item.id)
      })
    })
  },
  methods: {
    handleChanged(value) {
      this.selectedItem = value
      this.$emit('select', this.selectedItem)
    }
  }
}
</script>
