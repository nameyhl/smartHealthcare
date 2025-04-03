<template>
  <div ref="chartContainer" :style="{ width, height }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '400px'
  }
});

const chartContainer = ref(null);
const chartInstance = ref(null);

const init = (option) => {
  if (!chartInstance.value) {
    console.log(chartInstance.value);
    chartInstance.value = echarts.init(chartContainer.value);
  }
  chartInstance.value.setOption(option);
};

const updateOption = (option) => {
  if (chartInstance.value) {
    chartInstance.value.setOption(option);
  }
};


const destroy = () => {
  if (chartInstance.value) {
    window.removeEventListener('resize', resizeHandler);
    chartInstance.value.dispose();
    chartInstance.value = null;
  }
};

onBeforeUnmount(() => {
  destroy();
});

// 暴露方法给父组件
defineExpose({
  init,
  updateOption,
  destroy
});
</script>
