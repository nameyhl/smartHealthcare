<script setup>
import { ref, defineProps } from 'vue'
let props = defineProps({
  msg: String
})
</script>
<template>
  <div class="body">
    {{ msg }}
  </div>
</template>
<style lang="scss" scoped>
.body{
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-size: 22px;
  font-weight: 800;
  border: 1px solid #ccc;
  border-radius: 15px;
}
</style>
