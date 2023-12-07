<script>
export default {
  name: "LifeComponent1",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    CountBTn: function () {
      this.count++;
    },
  },
  //컴포넌트 라이프 사이클 함수(Hook)
  beforeCreate: function () {
    console.log("beforeCreate");
  },
  created: function () {
    console.log("Create");
  },
  beforeMount: function () {
    console.log("beforeMount");
  },
  mounted: function () {
    console.log("mounted");
  },
  beforeUpdate: function () {
    console.log("beforeUpdated");
  },
  updated: function () {
    console.log("updated");
  },
  beforeUnmount: function () {
    console.log("beforeUnmount");
  },
  unmounted: function () {
    console.log("unmounted");
  },
};
</script>
<template>
  <h4>LifeComponent1</h4>
  <p>카운터 :{{ count }}</p>
  <button @:click="CountBTn">클릭</button>
</template>
<style scoped></style>
