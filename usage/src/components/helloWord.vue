<template>
  <div>helloword</div>
  <div :class="$style.link">{{ msg }}</div>
  <span>测试</span>
  <h6 :class="style.test">测试1</h6>
  <h6 class="less">less</h6>
  <h6 class="scss">scss</h6>
</template>

<script setup>
import { defineProps } from 'vue'
import './hello.css'
import style from '@/components/hello.module.css' // 外部如果想引入module文件 文件名必须带 module

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