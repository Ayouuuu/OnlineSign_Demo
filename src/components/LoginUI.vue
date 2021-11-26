<template>
  <div class="flex center">
    <button @click="login" class="btn">登陆</button>
  </div>
</template>

<script>
import Utils from '../assets/js/util'
export default {
  methods:{
    login(){
      Utils.$emit('login');
    }
  }
}
</script>

<style scoped>
.btn{
  background-color: #11D183;
  @apply text-white border-none rounded-lg
  text-lg p-2.5 w-80 tracking-widest
  outline-none;
}
.btn:hover{
  background-color: rgba(8, 161, 100, 0.84);
}
</style>