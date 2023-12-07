<script>
export default {
  name: "OptionComponent4",
  watch: {
    inputTxt: function () {
      //inputTxt의 상태를 확인
      const pos = this.inputTxt.indexOf(this.forbiddenTxt);
      // pos의 크기가 0보다 크다면 금지된 값이 있다는 것
      if (pos >= 0) {
        alert(this.forbiddenTxt + "입력불가");
        this.inputTxt = this.inputTxt.substring(o, pos);
      }
    },
  },
  data() {
    return {
      forbiddenTxt: "바보",
      inputTxt: "",
    };
  },
};
</script>

<template>
  <h4>watch 옵션</h4>
  <div>
    <p>금지어 발견 :{{ forbiddenTxt }}</p>
    <textarea v-model="inputTxt" cols="30" rows="10"></textarea>
  </div>
</template>
<style scoped></style>
