<template>
  <div>app</div>
  <Helloword msg="abc" />
  <div>{{ state.count }}</div>
  <div><button @click="handleClick">+</button></div>
</template>

<script setup>
import { reactive } from 'vue'
import Helloword from './helloWord.vue'

let state = reactive({
  count: 1
})
const handleClick = () => {
  state.count++
}
</script>