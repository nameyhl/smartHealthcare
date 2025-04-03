<script setup>
import { ref } from 'vue'
import Title from '@/components/title/index.vue'

import carousel1 from '@/assets/carousel/carousel1.png'
import carousel2 from '@/assets/carousel/carousel2.png'
import carousel3 from '@/assets/carousel/carousel3.png'

let carouselList = [carousel1, carousel2, carousel3]

</script>
<template>
  <Title :msg="'系统首页'"></Title>
  <div class="introduce">
    <div class="systemIntroduce">
      <div class="systemTitle">
        关于系统
      </div>
      <div class="systemBody">
        系统是一个智慧医疗系统的前端页面，智慧医疗前端系统是基于Vue.js框架开发的现代化医疗管理平台，准备做多端系统，需要实现响应式布局，
        结合Element UI等UI组件库，打造高效、安全、用户友好的医疗信息化解决方案。该系统旨在优化医疗资源管理、提升医患交互体验，
        并支持大数据分析与可视化，助力医疗机构实现数字化转型。希望实现功能：医生用户，患者用户的管理，医生用户和患者用户之间的信息交互，
        医生对患者的初步诊断，对医生的开单信息留存，以便后续工作，患者还可以在系统上查看医生的评价，包括就诊感受。
        因为在19年严重的疫情下，线上诊断变得非常重要，或许医生供不应求，所以希望系统能接入ai，病患向ai提出自己的病症，然后得到初步诊断结果，然后开具非处方药。
        （处方药不能开，需要医生开具）（需要后端支持）
      </div>
    </div>
    <div class="authorIntroduce">
      <div class="authorTitle">
        关于作者
      </div>
      <div class="authorBody">作者：游和霖</div>
      <div class="authorBody">
        辽宁石油化工大学软件工程专业应届毕业生（2025届），目前已顺利完成全部课程学习，将于6月返校领取毕业证书。现寻求成都地区的前端开发岗位机会。精通Vue.js框架及Element-UI组件库开发扎实的HTML5/CSS3/JavaScript基础，能熟练使用SCSS预处理语言掌握axios等前后端交互技术，具备完整的项目开发能力持续关注前端技术发展，自学能力强，能快速掌握新技术
        作为应届毕业生，我不仅具备系统的软件工程理论知识，更通过自主学习和项目实践积累了实战经验。
        对前端开发充满热情，代码规范意识强，具有良好的团队协作能力和解决问题能力。期待加入全国的优秀团队，与公司共同成长。
      </div>
    </div>
  </div>
  <div class="carousel" >
    <div style=" width: 1024px;height: 400px; margin: 0 auto;">
      <el-carousel style=" width: 1024px;height: 400px;">
      <el-carousel-item style=" width: 1024px;height: 400px;"v-for="item in carouselList" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.introduce{
  border: 1px solid #ccc;
  height: 300px;
  overflow-y: inherit;
  border-radius: 5px;
  margin-top: 30px;
  .systemIntroduce{
    margin:0 10px ;
    border-bottom: 1px dashed #ccc;
    .systemTitle{
      font-size: 18px;
      font-weight: 800;
      padding-left: 2rem;
      margin: 10px 0;
    }
    .systemBody{
      font-size: 16px;
      line-height: 25px;
      text-indent: 2em;
      margin-bottom: 10px;
    }
  }
  .authorIntroduce{
    margin:0 10px ;
    border-bottom: 1px dashed #ccc;
      .authorTitle{
        font-size: 18px;
        font-weight: 800;
        padding-left: 2rem;
        margin: 10px 0;
      }
      .authorBody{
      font-size: 16px;
      line-height: 25px;
      text-indent: 2em;
      margin-bottom: 10px;
    }
    }

}
.carousel{
      width: 100%;
      margin-top: 30px;
    }
</style>
