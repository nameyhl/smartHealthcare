<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import VerifyCodeImg from '@/components/verification/index.vue'

const router = useRouter()

let formData = ref({
  userName: '',
  password: '',
  surePws:'',
  code:'',
  email:'',
  type: ''// 0:管理员 1:医生 2:患者
})


let VerifyCode = ref('')
const getVerifyCodeStr = (code) => {
  VerifyCode.value = code
}

const codeIsTrue = (rule, value, callback) => {
  if(formData.value.code === VerifyCode.value){
    callback()
  }else{
    callback(new Error('验证码错误'))
  }
}

const surePws = (rule, value, callback) => {
  if (value !== formData.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}
let rules = ref({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 8, max: 12, message: '长度在 8 到 12 个字符', trigger: 'blur' }
  ],
  email:[
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 12, message: '长度在 8 到 12 个字符', trigger: 'blur' }
  ],
  surePws:[
    { required: true, message: '请确认密码', trigger: 'blur' },
    { required: true, validator: surePws, trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { validator: codeIsTrue, trigger: 'blur'}
  ],
  type: [
    { required: true, message: '请输入验证码', trigger: 'change' },
  ]
})
let ruleForm = ref(null)

// 提交表单，登录
const submitForm = async () => {
  await ruleForm.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      ElMessage.error('请输入正确的信息')
      console.log('error submit!', fields)
    }
  })
}

// 跳转到注册页面
const toLogin = () => {
  router.push('/login')
}
</script>
<template>
  <div class="container">
    <!-- 表单盒子 -->
    <div class="formBox">
      <!-- 表单title -->
       <div class="title">
        欢迎注册本系统账号
       </div>
       <!-- 表单内容 -->
        <div class="formBody">
          <el-form :model="formData" ref="ruleForm" :rules="rules" label-width="100px">
            <el-form-item prop="userName" label="用户名：" >
              <el-input v-model="formData.userName"placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码：" >
              <el-input type="password" v-model="formData.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item prop="surePws" label="确认密码：" >
              <el-input type="password" v-model="formData.surePws" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱：" >
              <el-input v-model="formData.email"placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="code" label="验证码：">
              <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <el-input v-model="formData.code"placeholder="请输入验证码" style="width: 150px;"></el-input>
                <VerifyCodeImg :refreshTime="60" :canvasHeight="30" ref="verifyCodeImgRef" @getVerifyCodeStr="getVerifyCodeStr" />
              </div>
            </el-form-item>
            <el-form-item prop="type" label="账号类型：">
              <el-select v-model="formData.type"  placeholder="请选择账号类型">
                <el-option label="管理员" value="0"></el-option>
                <el-option label="医生" value="1"></el-option>
                <el-option label="患者" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <!-- 表单按钮 -->
        <div class="formFooter">
          <div class="button" style="width: 120px; margin: 10px auto;">
            <el-button type="primary" @click="submitForm()" style="width: 120px;">注册</el-button>
          </div>
          <div class="text">
            <span>已有账号？</span><span class="clickSpan" @click="toLogin()">返回登录</span>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/regiseBg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .formBox{
    width: 450px;
    height: 500px;
    background-color: #fff;
    .title{
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      font-weight: bolder;
      margin-bottom: 20px;
    }
    .formBody{
      width: 350px;
      margin: 0 auto 40px auto;
    }
    .formFooter{
      .text{
        text-align: center;
      }
      .clickSpan{
        color: #409eff;
        &:hover{
          cursor: pointer;
          color: #79bbff;
        }
      }
    }
  }
}
</style>
