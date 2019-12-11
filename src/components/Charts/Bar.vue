<template>
  <div>
    <h4 v-if="title" :style="{ marginBottom: '20px' }">{{ title }}</h4>
    <v-chart height="300" :data="data" :force-fit="true" :padding="['auto', 'auto', '40', '50']">
      <v-tooltip />
      <v-axis ref="vAxis" :data-key="'y'" :label="yAxisFormatter" />
      <v-bar position="x*y" :tooltip="tooltip" />
    </v-chart>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  props: {
    yAxisFormatter: {
      type: Object,
      default: () => {},
      required: false
    },
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    scale: {
      type: Array,
      default: () => {
        return [
          {
            dataKey: 'x',
            min: 2
          },
          {
            dataKey: 'y',
            title: '时间',
            min: 1,
            max: 22
          }
        ]
      }
    },
    tooltip: {
      type: Array,
      default: () => {
        return [
          'x*y',
          (x, y) => ({
            name: '',
            value: y
          })
        ]
      }
    }
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>
