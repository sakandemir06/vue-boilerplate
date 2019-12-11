<template>
  <div class="antv-chart-mini">
    <div class="chart-wrapper" :style="{ height: 46 }">
      <v-chart :force-fit="true" :height="height" :scale="scale" :data="data" :padding="[36, 0, 18, 0]">
        <v-tooltip />
        <v-smooth-area :tooltip="tooltip" position="x*y" />
      </v-chart>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
const data = []
const beginDay = new Date().getTime()

for (let i = 0; i < 10; i++) {
  data.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.round(Math.random() * 10)
  })
}

const tooltip = [
  'x*y',
  (x, y) => ({
    name: x,
    value: y
  })
]
const scale = [
  {
    dataKey: 'x',
    min: 0
  },
  {
    dataKey: 'y',
    min: 0
  }
]

export default {
  name: 'MiniArea',
  props: {
    data: {
      type: Array,
      default: () => {
        return data
      }
    },
    tooltip: {
      type: Array,
      default: () => {
        return tooltip
      }
    },
    scale: {
      type: Array,
      default: () => {
        return scale
      }
    },
    height: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import 'chart';
</style>
