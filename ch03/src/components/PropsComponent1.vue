<script>
export default {
  name: "PropsComponent1",
  props: ["name", "age"],
};
</script>
<template>
  <h3>PropsComponent1</h3>
  <p>Props name: {{ name }}</p>
  <p>
    Props name: {{ name }}<br />
    Props age : {{ age }}
  </p>
</template>
<style scoped></style>
