<script>
export default {
  name: "PropsComponent2",
  props: ["MyCity"],
};
</script>
<template>
  <!-- li를 사용하려면 ul or ol이 있어야 하는데 App.vue에서 정의할 예정 -->
  <li>{{ MyCity }}</li>
</template>
<style scoped></style>
