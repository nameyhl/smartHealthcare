<script setup>
// import { defineProps } from 'vue';

let props = defineProps({
  card: Object
});

</script>
<template>
 <div class="card" :style="{ background: card.color}">
  <div class="icon">
    <component :is="card.icon" style="width: 50px;" />
  </div>
  <div class="cardBody">
    <div class="top">
      {{ card.title }}
    </div>
    <div class="butoom">
      {{ card.content }}
    </div>
  </div>
 </div>
</template>
<style lang="scss" scoped>
.card{
  width: 200px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 10px;
  .icon{
    width: 100px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .cardBody{
    width: 150px;
    div{
      height: 50px;
      text-align: center;
      line-height: 50px;
    margin-right: 20px;
    }
  }
  .top{
    border-bottom: #fff solid 1px;
  }
}
</style>
