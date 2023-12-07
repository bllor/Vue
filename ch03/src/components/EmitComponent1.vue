<script>
export default {
  name: "EmitComponent1",
  props: ["name", "age"],
  methods: {
    emit: function () {
      //상위 컴포넌트로 전달할 데이터 생성
      const emitData = {
        name: this.myName,
        age: this.myAge,
      };
      //상위 컴포넌트로 보내기 위해서 myEmit라는 이벤트를 발생
      //이벤트가 발생되면서 emitData가 같이 전달이 된다.
      this.$emit("myEmit", emitData);
    },
  },

  data() {
    return {
      myName: this.name,
      myAge: this.age,
    };
  },
};
</script>
<template>
  <h4>EmitComponent1</h4>
  <p>
    이름 : <input v-model="myName" type="text" /><br />
    나이 : <input v-model="myAge" type="text" /><br />
  </p>
  <button @click="emit">전달</button>
</template>
<style scoped></style>
