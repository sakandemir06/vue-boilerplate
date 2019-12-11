<template>
  <div v-if="!multiple">
    <a-select
      v-model="item"
      :placeholder="$t('Seçiniz')"
      show-search
      show-arrow
      :filter-option="$filterOption"
      @change="handleChanged"
    >
      <a-select-option v-for="data in dataSet" :key="data.id" :value="data.id">{{ data.name }}</a-select-option>
    </a-select>
  </div>
  <div v-else>
    <a-select
      v-model="multiItem"
      :placeholder="$t('Seçiniz')"
      mode="multiple"
      show-search
      show-arrow
      :filter-option="$filterOption"
      @change="handleChanged"
    >
      <a-select-option v-for="data in dataSet" :key="data.id" :value="data.id">{{ data.name }}</a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  props: {
    optionsData: {
      type: Array,
      default: () => {
        return []
      },
      required: false
    },
    endpoint: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    multiItem: {
      type: Array,
      default: undefined
    },
    item: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      selectedItem: null,
      dataSet: []
    }
  },
  mounted() {
    if (this.endpoint) {
      this.$http.get(this.endpoint).then(res => {
        this.dataSet = res.data
      })
    } else {
      this.dataSet = this.optionsData
    }
  },
  methods: {
    handleChanged(value) {
      this.selectedItem = value
      this.$emit('select', this.selectedItem)
    }
  }
}
</script>
