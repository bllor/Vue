<script>
export default {
  name: "OptionComponent2",

  //컴포넌트에서 이벤트 로직처리를 위한  메서드 선언 옵션
  methods: {
    btn1Click() {
      alert("btn1Click");
    },
    btn2Click: function () {
      alert("btn2Click");
    },
    btn3Click: () => {
      alert("btn3Click");
    },
  },
};
</script>
<template>
  <h4>Methods 옵션</h4>
  <p>
    <button v-on:click="btn1Click">button1</button>
    <button @:click="btn2Click">button2</button>
    <button @:click="btn3Click">button3</button>
  </p>
</template>
<style></style>
