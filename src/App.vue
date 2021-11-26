<template>
  <div id="app">
    <MainUI/>
    <InputUI ref="inputUI"/>
    <LoginUI ref="loginUI"/>
  </div>
</template>

<script>
import MainUI from "@/components/MainUI";
import InputUI from "@/components/InputUI";
import LoginUI from "@/components/LoginUI";

export default {
  name: 'App',
  components: {
    MainUI,
    InputUI,
    LoginUI
  }
}
</script>

<style>
#app {
}
</style>
