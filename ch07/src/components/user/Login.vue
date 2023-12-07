<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
//저장소 가져오기
import { useAuthStore } from "../../store/auth";
const authStore = useAuthStore();
//반응형 객체
const user = reactive({
  uid: null,
  pass: null,
});

//라우터 가져오기
const router = useRouter();

//form 전송 이벤트 핸들러
const submitLogin = () => {
  console.log(user);
  authStore
    .login(user)
    .then((response) => {
      router.push("/jwt/loginSuccess");
    })
    .catch((err) => {
      console.log("catch : " + JSON.stringify(err));
    });
};
</script>
<template>
  <h4>Login</h4>
  <form @submit.prevent="submitLogin">
    <input type="text" placeholder="아이디" v-model="user.uid" />
    <input type="text" placeholder="비밀번호" v-model="user.pass" />
    <input type="submit" value="로그인" />
  </form>
</template>

<style scoped></style>
