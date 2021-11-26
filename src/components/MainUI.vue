<template>
  <div class="flex center flex-wrap">
    <div class="w-full flex flex-wrap center">
      <img class="flex-auto -m-4" src="../assets/1.png"/>
      <div class="w-1/2 flex flex-col absolute center space-y-0.5">
        <img class="bg-no-repeat brighnessImg w-2/6" src="../assets/地球.png"/>
        <a class="text-size">在校打卡</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainUI"
}
</script>

<style scoped>
.center {
  @apply justify-center items-center;
}

.brighnessImg {
  filter: brightness(100);
}
</style>