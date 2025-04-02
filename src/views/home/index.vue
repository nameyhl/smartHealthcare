<script setup>
import { ArrowUpBold, ArrowDownBold, Avatar, Close } from '@element-plus/icons-vue'
import { ref } from 'vue'
import treeMenu from '@/components/treeMenu/index.vue'
let isUp = ref(false)

let upUser = () => {
  isUp.value = !isUp.value
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header">
          <div class="hederTaxt">智慧医疗系统</div>
          <div class="userBox">
            <div style="margin-right: 10px;">
              <el-avatar> user </el-avatar>
            </div>
            <div style="margin-right: 10px;">用户名</div>
            <div class="icon"@click="upUser">
              <el-icon v-if="isUp"><ArrowUpBold /></el-icon>
              <el-icon v-else><ArrowDownBold /></el-icon>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" style="height: 100vh;"><treeMenu /></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <div v-show="isUp" class="positionBox">
      <div class="positionText">
        <Avatar style="width: 21px; line-height: 50px; margin-right: 5px;" />
        <div>
        个人信息
        </div>
      </div>
      <div class="positionText">
        <Close style="width: 21px; line-height: 50px; margin-right: 5px;"/>
        <div>退出登录</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.el-header{
  border-bottom: 1px solid #ccc;
  height: 50px;
}
.header{
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  .hederTaxt{
    font-size: 20px;
    font-weight: 800;
    margin-left: 50px;
  }
  .userBox{
    display: flex;
    align-items: center;
    margin-right: 50px;
    .icon{
      cursor: pointer;
    }
  }
}
.positionBox{
  position: fixed;
  right: 50px;
  top: 55px;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 9999;
  .positionText{
    width: 150px;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      color: #fff;
      background-color: #409eff;
    }
  }
}

</style>
