<script setup>
import { ref } from 'vue'
import Title from '@/components/title/index.vue'
import Card from '@/components/card/index.vue'
import { Upload, Avatar, SuitcaseLine, Setting } from '@element-plus/icons-vue'
import MyTable from '@/components/table/index.vue'

let cardList = ref([
{
    icon: Upload,
    title: '就诊次数',
    content: '2000',
    color: '#2478f2'
  },
  {
    icon: Avatar,
    title: '未开具处方',
    content: '2000',
    color: '#009090'
  },
  {
    icon: SuitcaseLine,
    title: '开具处方',
    content: '2000',
    color: '#f2245a'
  },
])

let columns = ref([
  {
    label: '就诊时间',
    prop: 'date'
  },
  {
    label: '就诊人',
    prop: 'name'
  },
  {
    label: '就诊科室',
    prop: 'department'
  },
  {
    label: '就诊医生',
    prop: 'doctor'
  },
  {
    label: '就诊状态',
    prop: 'status'
  },
  {
    label: '是否开单',
    prop: 'isOrder'
  }
])
let data = ref([
  {
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },
  {
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },{
    date: '2021-01-01',
    name: '张三',
    department: '内科',
    doctor: '张医生',
    status: '已就诊',
    isOrder: '是'
  },
])

const handleEdit = (row) => {
  console.log('编辑:', row);
};

const handleDelete = (row) => {
  console.log('删除:', row);
};
</script>
<template>
  <Title :msg="'就诊档案'"></Title>
  <div class="cardList">
    <Card v-for="item in cardList" :card="item"></Card>
  </div>
  <div class="tableBody">
    <MyTable :columns="columns" :tableData="data">
      <el-table-column label="操作" width="180">
      <template #default="{ row }">
        <el-button size="small" @click="handleEdit(row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(row)">
          删除
        </el-button>
      </template>
    </el-table-column>
    </MyTable>
  </div>
</template>
<style lang="scss" scoped>
.cardList{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ccc;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px
}
.tableBody{
  margin-top: 20px;
}
</style>
