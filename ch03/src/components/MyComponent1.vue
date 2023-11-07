<template>
  <h4>MyComponent1</h4>
  <p>사용자 정의 컴포넌트</p>
</template>
<script>
export default {
  name: "MyComponent1",
};
</script>
<style scoped>
/* 
해당 컴포넌트에게만 style을 적용하기 위해서 style에 scope를 붙인다. 
*/
h4 {
  color: red;
}
</style>
