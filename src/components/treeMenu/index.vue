<script setup>
import {  ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

let chickWhat = ref('')
chickWhat.value = route.path
let props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
})

const toPage = (index) => {
  router.push(index)
}

watch(route, (to, from) => {
  chickWhat.value = to.path
})
</script>
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    style="height: calc(100vh - 50px);"
  >
    <el-sub-menu :index="item.index" v-for="item in menu" :key="item.index">
      <template #title>
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item-group v-for="el in item.children" :index="item.index" :key="el.index" >
        <el-menu-item  @click="toPage(el.index)" :class="{'is-active': chickWhat === el.index}">
          <el-icon>
          <component :is="el.icon" />
        </el-icon>
        {{ el.title }}
      </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
<style lang="scss" scoped>
.is-active {
  background-color: #409eff;
  color: #fff;
}
</style>
