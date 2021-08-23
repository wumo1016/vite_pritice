<template>
  <div>
    <div>{{ count }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from "vue";

interface State {
  count: number;
}

const state = reactive<State>({ count: 0 });
const handleClick = () => {
  state.count++;
};
</script>
<style scoped></style>
