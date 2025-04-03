<script setup>
import {  ref, onMounted, watch, nextTick } from 'vue';
import Title from '@/components/title/index.vue'
import Card from '@/components/card/index.vue'
import Chart from '@/components/chart/index.vue'
import { Upload, Avatar , SuitcaseLine, Setting} from '@element-plus/icons-vue'

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

let barChartData = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params) {
        console.log("Tooltip Params:", params); // 调试日志

        if (!Array.isArray(params)) {
          params = [params]
        }
        // 添加空值检查
        if (!params.length || !params[0]) return "无数据";

        const month = params[0].axisValue || "未知时间"
        let tooltipContent = `${month}<br/>`

        params.forEach((item) => {
          if (item) {
            tooltipContent += `${item.marker} ${item.seriesName}: ${item.value}<br/>`
          }
        })

        return tooltipContent
      }
    },
    legend: {
      data: ['普通用户', '医生用户'] // 添加legend数据
    },
    grid: {
      left: 100,
      right: 100,
      top: 50,
      bottom: 50
    },
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // 恢复完整数据
    },
    series: [
      {
        name: '普通用户',
        type: 'bar',
        label: {
          show: true,
          formatter: (params) => params.value
        },
        data: [300, 400, 500, 600, 700, 800, 900], // 恢复完整数据
        itemStyle: {
          color: '#5470C6'
        }
      },
      {
        name: '医生用户',
        type: 'bar',
        label: {
          show: true,
          formatter: (params) => params.value
        },
        data: [100, 150, 200, 260, 340, 380, 400], // 恢复完整数据
        itemStyle: {
          color: '#91CC75'
        }
      }
    ]
  }

let lineChartOption = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params) {
        console.log("Tooltip Params:", params); // 调试日志

        if (!Array.isArray(params)) {
          params = [params]
        }
        // 添加空值检查
        if (!params.length || !params[0]) return "无数据";

        const month = params[0].axisValue || "未知时间"
        let tooltipContent = `${month}<br/>`

        params.forEach((item) => {
          if (item) {
            tooltipContent += `${item.marker} ${item.seriesName}: ${item.value}<br/>`
          }
        })

        return tooltipContent
      }
    },
    legend: {
      data: ['普通用户', '医生用户'] // 添加legend数据
    },
    grid: {
      left: 100,
      right: 100,
      top: 50,
      bottom: 50
    },
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // 恢复完整数据
    },
    series: [
      {
        name: '普通用户',
        type: 'line',
        label: {
          show: true,
          formatter: (params) => params.value
        },
        data: [300, 400, 500, 600, 700, 800, 900], // 恢复完整数据
        itemStyle: {
          color: '#5470C6'
        }
      },
      {
        name: '医生用户',
        type: 'line',
        label: {
          show: true,
          formatter: (params) => params.value
        },
        data: [100, 150, 200, 260, 340, 380, 400], // 恢复完整数据
        itemStyle: {
          color: '#91CC75'
        }
      }
    ]
  }

let option = ref(barChartData)

watch(chooseChart, (val) => {
  if(val == 1){
    option.value = barChartData
  }
  if( val == 2){
    option.value = lineChartOption
  }
})

let stackedColumnChart = ref(null);

onMounted(() => {
  console.log(stackedColumnChart.value);

  initChart();
});

const initChart = () => {

  stackedColumnChart.value.init(option);
};

</script>
<template>
  <Title :msg="'系统数据'"></Title>
  <div class="cardList">
    <Card v-for="item in cardList" :key="item.title" :card="item"></Card>
  </div>
  <div class="chartBox">
    <el-radio-group v-model="chooseChart" size="large">
      <el-radio-button label="用户总计柱状图" value="1" />
      <el-radio-button label="用户增长折线图" value="2" />
    </el-radio-group>
    <Chart ref="stackedColumnChart" />
  </div>
</template>
<style lang="scss" scoped>
.cardList{
  height: 150px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 15px;
}
.chartBox{
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 20px;
}

</style>
