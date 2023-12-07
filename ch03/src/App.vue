<!-- 
  sfc(single file component) 구조 script, template, style로 구분되어 있다는 것
 -->
<script>
// script setup과 export default는 함께 사용하지 못한다.
// Composition API <- 이 방식을 더 권장한다.
// import는 composition API에서만 사용된다.
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";
import MyComponent3 from "./components/MyComponent3.vue";
import OptionComponent1 from "./components/OptionComponent1.vue";
import OptionComponent2 from "./components/OptionComponent2.vue";
import OptionComponent3 from "./components/OptionComponent3.vue";
import OptionComponent4 from "./components/OptionComponent4.vue";
import PropsComponent1 from "./components/PropsComponent1.vue";
import PropsComponent2 from "./components/PropsComponent2.vue";
import PropsComponent3 from "./components/PropsComponent3.vue";
import PropsComponent4 from "./components/PropsComponent4.vue";
import EmitComponent1 from "./components/EmitComponent1.vue";
import LifeComponent1 from "./components/LifeComponent1.vue";

export default {
  //option API이다.
  name: "app",
  data() {
    return {
      cities: ["서울", "대전", "대구", "부산", "광주"],
      isShow: true,
    };
  },
  components: {
    //import를 하려면 components 안에 입력해주여야 한다.
    MyComponent1,
    MyComponent2,
    MyComponent3,
    OptionComponent1,
    OptionComponent2,
    OptionComponent3,
    OptionComponent4,
    PropsComponent1,
    PropsComponent2,
    PropsComponent3,
    PropsComponent4,
    EmitComponent1,
    LifeComponent1,
  },
  methods: {
    emitHandler: function (data) {
      alert("emitHandler");
      console.log(data.name);
      console.log(data.age);
    },
    toggleBtn: function () {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
};
</script>

<template>
  <h3>Ch03.component</h3>

  <h4>1.Component</h4>
  <MyComponent1 />
  <MyComponent2 />

  <MyComponent3 />

  <h4>2.Option API</h4>
  <OptionComponent1 />
  <OptionComponent2 />
  <OptionComponent3 />
  <OptionComponent4 />

  <h4>3.Component 통신</h4>
  <PropsComponent1 name="김유신" />
  <PropsComponent1 name="김춘추" age="21" />

  <ul>
    <PropsComponent2 v-for="city in cities" :MyCity="city" />
    <!--
    반복되는 속성인 city를 MyCity에 적용하려고 하면 
    바인딩 시켜주어야 한다. 
  --></ul>

  <PropsComponent3 c3Name="홍길동" c3Age="12살" />
  <EmitComponent1 name="홍길동" age="12" v-on:myEmit="emitHandler" />
  <h4>4.Component 생명주기</h4>
  <LifeComponent1 v-if="isShow" /><br />
  <button @click="toggleBtn">토글</button>
</template>

<style scoped></style>
