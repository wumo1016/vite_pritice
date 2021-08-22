<template>
  <div>{{ state.count }}</div>
  <div><button @click="handleClick">+</button></div>
  <div :class="$style.link">{{ msg }}</div>
  <span>测试</span>
  <h6 :class="style.test">测试1</h6>
  <h6 class="less">less</h6>
  <h6 class="scss">scss</h6>
  <div class="img_box"></div>
  <!-- <img src="./assets/hook.jpg" alt=""> -->
  <img :src="img" alt="" />
</template>

<script setup>
import { reactive } from 'vue'
import style from '@/components/hello.module.css' // 外部如果想引入module文件 文件名必须带 module
import './hello.css'
import hook from '@/assets/hook.jpg'

let state = reactive({
  count: 1
})

const handleClick = () => {
  state.count++
}

const img = hook

// defineProps 不需要导入
defineProps({
  msg: String
})
</script>
<style scoped>
div {
  color: red;
  transform: translateX(20px);
}
</style>
<style module>
.link {
  color: blue !important;
}
</style>
<style lang="less" scoped>
@color: orange;
.less {
  color: @color;
}
</style>
<style lang="scss" scoped>
$color: orange;
.scss {
  color: $color;
}
</style>