<script>
export default {
  name: "OptionComponent3",

  //컴포넌트 상태값이 변하면 자동으로 계산되는 함수 정의 옵션
  //totPrice에서 계산된 값을 출력할 때 사용된다.
  //메서드로 쓰인 함수에서 출력된 값은 메서드 이름으로 정의시 출력되지 않는다.
  computed: {
    totPrice: function () {
      return this.price * this.count;
    },

    txtCount: function () {
      return this.text.length;
    },

    remainTxt: function () {
      return 20 - this.text.length;
    },

    computeColor: function () {
      this.myColor = "green";

      if (this.remainTxt < 15) {
        this.myColor = "orange";
      }
      if (this.remainTxt < 1) {
        this.myColor = "red";
      }
      return this.myColor;
    },
  },
  data() {
    return {
      price: 10000,
      count: 10,
      text: "",
      myColor: "black",
    };
  },
};
</script>

<template>
  <h4>Computed 옵션</h4>
  <div>
    <input v-model="price" type="number" />원
    <input v-model="count" type="number" />개수
    <p>금액 :{{ totPrice }}</p>
  </div>

  <div>
    <p>20자 이내로 작성하시오.</p>
    <textarea v-model="text" cols="30" role="2"></textarea>
    <p>글자수 : {{ txtCount }}</p>
    <p v-bind:style="{ color: myColor }">남은글자수 : {{ remainTxt }}</p>
  </div>
</template>
<style scoped></style>
