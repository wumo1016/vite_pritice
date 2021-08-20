<template>
  <div>app</div>
  <Helloword msg="abc" />
  <div>{{ state.count }}</div>
  <div><button @click="handleClick">+</button></div>
  <div class="img_box"></div>
  <!-- <img src="./assets/hook.jpg" alt=""> -->
  <img :src="img" alt="" />
</template>

<script setup>
import { reactive } from 'vue'
import Helloword from './helloWord.vue'
import hook from './assets/hook.jpg'

let state = reactive({
  count: 1
})

const handleClick = () => {
  state.count++
}

const img = hook
</script>

<style scoped>
.img_box {
  width: 200px;
  height: 200px;
  background: url('./assets/hook.jpg') center / contain;
}
</style>