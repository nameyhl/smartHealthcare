<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import Title from '@/components/title/index.vue'
import Card from '@/components/card/index.vue'
import Chart from '@/components/chart/index.vue'
import { Upload, Avatar, SuitcaseLine, Setting } from '@element-plus/icons-vue'

let cardList = ref([]);
cardList.value = [
  {
    icon: Avatar,
    title: '用户数量',
    content: '2000（人）',
    color: '#2478f2'
  },
  {
    icon: Upload,
    title: '用户增长量',
    content: '150（人）',
    color: '#009090'
  },
  {
    icon: SuitcaseLine,
    title: '医生用户',
    content: '500（人）',
    color: '#f2245a'
  },
  {
    icon: Setting,
    title: '患者用户',
    content: '1500（人）',
    color: '#009090'
  },
]

let chooseChart = ref('1')

const rawData = [
  [150, 212, 201, 154, 190, 330, 410],
  [820, 832, 901, 934, 1290, 1330, 1320]
];
const grid = {
  left: 100,
  right: 100,
  top: 50,
  bottom: 50
};
const series = [
  '医生用户',
  '患者用户'
].map((name, sid) => {
  return {
    name,
    type: 'bar',
    stack: 'total',
    barWidth: '60%',
    label: {
      show: true,
      formatter: (params) => params.value
    },
    data: rawData[sid]
  };
});

let barChartOption = {
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  legend: {
    selectedMode: false
  },
  grid,
  yAxis: {
    type: 'value'
  },
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
  },
  series
};

let lineChartOption = {
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  legend: {
    data: ['医生用户', '患者用户']
  },
  grid: {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '医生用户',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '患者用户',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
};

let option = ref({})
option.value = barChartOption

console.log(option);


watch(chooseChart, (val) => {
  if (val == 1) {
    option.value = barChartOption
  }
  if (val == 2) {
    option.value = lineChartOption
  }
})

</script>
<template>
  <Title :msg="'系统数据'"></Title>
  <div class="title">用户数据</div>
  <div class="cardList">
    <Card v-for="item in cardList" :key="item.title" :card="item"></Card>
  </div>
  <div class="chartBox">
    <el-radio-group v-model="chooseChart" size="large">
      <el-radio-button label="用户总计柱状图" value="1" />
      <el-radio-button label="用户增长折线图" value="2" />
    </el-radio-group>
    <Chart :options="option"></Chart>
  </div>
  <div class="title">就诊数据</div>
</template>
<style lang="scss" scoped>
.cardList {
  height: 150px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 15px;
}

.chartBox {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 20px;
}

.title {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 15px;
}
</style>
