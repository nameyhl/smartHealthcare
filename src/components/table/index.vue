<template>
  <el-table
    v-bind="$attrs"
    :data="tableData"
    :border="border"
    :stripe="stripe"
    :size="size"
    @selection-change="handleSelectionChange"
  >
  <el-table-column align="center" header-align="center" type="index" label="序号" width="80"></el-table-column>
    <!-- 默认居中列 -->
    <template v-for="column in columns" :key="column.prop || column.type">
      <!-- 有自定义插槽的情况 -->
      <el-table-column
        v-if="column.slot"
        v-bind="column"
        :align="column.align || 'center'"
        :header-align="column.headerAlign || 'center'"
      >
        <template #default="scope">
          <slot :name="column.slot" v-bind="scope"></slot>
        </template>
      </el-table-column>

      <!-- 普通列 -->
      <el-table-column
        v-else
        v-bind="column"
        :align="column.align || 'center'"
        :header-align="column.headerAlign || 'center'"
      />
    </template>

    <!-- 额外插槽内容 -->
    <slot></slot>
  </el-table>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  // 表格数据
  tableData: {
    type: Array,
    required: true,
    default: () => []
  },
  // 列配置
  columns: {
    type: Array,
    required: true,
    default: () => []
  },
  // 是否显示边框
  border: {
    type: Boolean,
    default: true
  },
  // 是否显示斑马纹
  stripe: {
    type: Boolean,
    default: false
  },
  // 表格尺寸
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['large', 'default', 'small'].includes(value)
  }
});

const emit = defineEmits(['selection-change']);

// 处理多选
const handleSelectionChange = (val) => {
  emit('selection-change', val);
};

// 暴露方法供父组件调用
defineExpose({
  // 可以添加表格方法如 clearSelection 等
});
</script>

<style scoped>

</style>
