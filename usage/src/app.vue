<template>
  <Helloword msg="abc" />
  <Test />
</template>

<script lang="ts" setup>
import Helloword from '@/components/helloWord.vue'
import Test from '@/components/test.vue'

fetch('/api/todos/1')
  .then(res => res.json())
  .then(res => {
    console.log(res)
  })
</script>

<style scoped>
.img_box {
  width: 200px;
  height: 200px;
  background: url('@/assets/hook.jpg') center / contain;
}
</style>