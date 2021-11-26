<template>
  <div class="flex flex-row center">
    <div class="pt-20 pb-6">
      <div class="column">
        <input class="input" type="text" v-model="email" placeholder="邮箱号"/>
        <span class="notify" v-show="!judge_user && email.length > 0">* 用户名不符合要求</span>
      </div>
      <div class="column">
        <input class="input" v-model="pwd" type="password" placeholder="请输入密码"/>
        <span class="notify" v-show="!judge_pwd && pwd.length > 0">* 密码不符合要求</span>
        <a href="#" @click="show_pwd" class="text">忘记密码?</a>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from '../assets/js/util'

export default {
  data(){
    return{
      email: '',
      pwd:'',
    }
  },
  methods:{
    show_pwd(){
      this.$toast({
        message:'密码为123456',
        position: "bottom",
      });
    },
    login(){
      let _this = this;
      if (this.email.length <= 0){
        this.$toast("邮箱号不能为空")
        return;
      }else if (this.pwd.length <= 0){
        this.$toast("密码不能为空");
        return;
      }
      if (!_this.judge_user || !_this.judge_pwd){
        this.$toast.fail("登陆失败");
        return;
      }
      this.$toast.loading({
        message: '正在登陆...',
        forbidClick: true,
        onClose(){
          _this.email = '';
          _this.pwd = '';
          _this.$toast.success("登陆成功");
        },
      });
    },
  },
  computed:{
    judge_user(){
      return !!this.email.match(/^[a-zA-Z]\w{9,}$/);
    },
    judge_pwd(){
      return !!this.pwd.match(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,}$/);
    },
  },
  mounted() {
    Utils.$on('login',()=>{
      this.login();
    });
  }
}
</script>

<style scoped>
.input {
  @apply text-sm md:text-xl border-b-2 border-gray-300 outline-none;
}
.input::-webkit-input-placeholder{
  color: #CCCCCC;
  @apply text-sm md:text-xl;
}
.input:focus{
  @apply border-gray-500 text-sm md:text-xl;
}
.column{
  @apply flex flex-col pb-12 w-64;
}
.text{
  color: #CCCCCC;
  font-size: 0.5rem;
  @apply ml-2 w-16 mt-2;
}
.notify{
  @apply text-red-500;
}
</style>