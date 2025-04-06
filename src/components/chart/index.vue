<template>
  <div ref="chartRef" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  // 图表宽度
  width: {
    type: String,
    default: '100%'
  },
  // 图表高度
  height: {
    type: String,
    default: '400px'
  },
  // ECharts 配置项
  options: {
    type: Object,
    required: true
  },
  // 图表主题
  theme: {
    type: [String, Object],
    default: ''
  },
  // 是否启用动画
  animation: {
    type: Boolean,
    default: true
  },
  // 是否启用响应式
  responsive: {
    type: Boolean,
    default: true
  }
})

const chartRef = ref(null)
let chartInstance = null

// 初始化图表
const initChart = () => {
  if (!chartRef.value) return

  // 如果已有实例则先销毁
  if (chartInstance) {
    chartInstance.dispose()
  }

  chartInstance = echarts.init(chartRef.value, props.theme)

  // 设置选项
  updateChart()

  // 响应式调整
  if (props.responsive) {
    window.addEventListener('resize', handleResize)
  }
}

// 更新图表
const updateChart = () => {
  if (!chartInstance) return

  // 设置动画配置
  const options = props.animation
    ? props.options
    : { ...props.options, animation: false }

  chartInstance.setOption(options, true)
}

// 处理窗口大小变化
const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize()
  }
}

// 监听选项变化
watch(() => props.options, () => {
  updateChart()
}, { deep: true })

// 监听主题变化
watch(() => props.theme, () => {
  initChart()
})

// 组件挂载时初始化
onMounted(() => {
  initChart()
})

// 组件卸载前清理
onBeforeUnmount(() => {
  if (chartInstance) {
    if (props.responsive) {
      window.removeEventListener('resize', handleResize)
    }
    chartInstance.dispose()
    chartInstance = null
  }
})
</script>