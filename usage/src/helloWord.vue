<template>
  <div>helloword</div>
  <div>{{ msg }}</div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  msg: String
})
</script>