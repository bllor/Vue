<script setup>
import { useMainStore } from "../store/mainStore";
import { computed } from "@vue/reactivity";

//전역 스토어 가져오기
const mainStore = useMainStore();

const count1 = mainStore.doubleCount;
const count2 = computed(() => mainStore.doubleCount);

const btnIncrement = () => {
  mainStore.increment();
};
const btnDecrement = () => {
  mainStore.decrement();
};
</script>
<template>
  <h4>MyComponent1</h4>

  <p>
    mainStore count1 : {{ count1 }}<br />
    mainStore count2 : {{ count2 }}<br />
  </p>
  <button @click="btnIncrement">증가</button>
  <button @click="btnDecrement">감소</button>
</template>
<style></style>
