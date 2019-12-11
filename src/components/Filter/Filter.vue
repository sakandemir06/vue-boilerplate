<template>
  <div class="table-page-search-wrapper">
    <a-form>
      <a-row type="flex" :gutter="48">
        <slot name="form"></slot>
        <slot v-if="advanced" name="advancedForm"></slot>
        <a-col
          style="display:flex; justify-content: flex-end; align-items:flex-end"
          :md="(!advanced && 8) || 24"
          :sm="24"
        >
          <span
            class="table-page-search-submitButtons"
            :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
          >
            <a-button style="margin-left: 8px" @click="handleCancel">{{ $t('Sıfırla') }}</a-button>
            <a v-if="$slots.advancedForm" style="margin-left: 8px" @click="advanced = !advanced">
              {{ advanced ? $t('Standart') : $t('Gelişmiş') }}
              <a-icon :type="advanced ? 'up' : 'down'" />
            </a>
          </span>
        </a-col>
      </a-row>
    </a-form>
    <a-row v-if="!$checkNestedObjects(currentFilter)" style="margin-bottom: 24px">
      <a-alert type="warning">
        <template slot="description">
          <template v-for="(field, index) in queryString">
            <a-tag
              v-if="field.object[field.key]"
              :key="field.name + '_' + index"
              color="blue"
              closable
              @close="deleteFilter(field)"
            >
              <span>{{ $t(field.name) }}:</span>
              {{ field.value }}
            </a-tag>
          </template>
        </template>
      </a-alert>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: Object,
      default: () => {},
      required: true
    },
    queryString: {
      type: Array,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      defaultParam: {},
      advanced: false,
      currentFilter: {}
    }
  },
  computed: {},
  watch: {
    query: {
      handler() {
        this.refreshFilter()
      },
      deep: true
    }
  },
  created() {
    this.defaultParam = { ...JSON.parse(JSON.stringify(this.query.queryParam)) }
  },
  methods: {
    deleteFilter(field) {
      field.object[field.key] = undefined
    },
    refreshFilter() {
      this.currentFilter = JSON.parse(JSON.stringify(this.query))
      this.$emit('filtered')
    },
    handleCancel() {
      this.query.queryParam = JSON.parse(JSON.stringify(this.defaultParam))
      this.refreshFilter()
    }
  }
}
</script>
