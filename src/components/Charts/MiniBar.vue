<template>
  <div class="antv-chart-mini">
    <div class="chart-wrapper" :style="{ height: 46 }">
      <v-chart :force-fit="true" :height="height" :data="data" :padding="[36, 5, 18, 5]">
        <v-tooltip />
        <v-bar :tooltip="tooltip" position="x*y" />
      </v-chart>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
const innerData = []
const beginDay = new Date().getTime()

for (let i = 0; i < 10; i++) {
  innerData.push({
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
    min: 2
  },
  {
    dataKey: 'y',
    title: '时间',
    min: 1,
    max: 30
  }
]

export default {
  name: 'MiniBar',
  props: {
    data: {
      type: Array,
      default: () => {
        return innerData
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
