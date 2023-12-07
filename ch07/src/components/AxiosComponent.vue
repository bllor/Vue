<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
const users = ref([]);
const inputTxt = ref("");

const user = reactive({
  data: {},
});

const btnGetUser = () => {
  axios({
    url: "http://localhost:8080/Ch10/user1",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      console.log(response);
      users.value = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const btnGetUserById = async () => {
  const response = await axios.get(
    "http://localhost:8080/Ch10/user1/" + inputTxt.value
  );
  console.log("response : " + response);
  user.data = response.data;
};

const registerUser = () => {
  console.log("user :" + user);
  axios
    .post("http://localhost:8080/Ch10/user1", user)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}; //registerUser end
const updateUser = () => {
  console.log("user :" + user);
  axios
    .put("http://localhost:8080/Ch10/user1", user)
    .then((response) => {
      console.log(response);
      alert("수정");
    })
    .catch((err) => {
      console.log(err);
    });
}; //updateUser end

const btnDelteUserById = () => {
  axios
    .delete(`http://localhost:8080/Ch10/user1/${inputTxt.value}`)
    //delete는 템플릿 문자열을 사용하므로 주소를 ``으로 입력하고,
    //${inputTxt.value}내의 변수를 내보낸다.
    .then((response) => {
      console.log(response);
      alert("삭제");
    })
    .catch((err) => {
      console.log(err);
    });
}; //btnDelteUserById end
</script>
<template>
  <h4>Axios 실습</h4>

  <h4>Get</h4>
  <button @click="btnGetUser">User 요청</button>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>전화번호</th>
      <th>나이</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>

  <h4>Get</h4>
  <input type="text" v-model="inputTxt" />
  <button @click="btnGetUserById">User 요청</button>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>전화번호</th>
      <th>나이</th>
    </tr>
    <tr>
      <td>{{ user.data.id }}</td>
      <td>{{ user.data.name }}</td>
      <td>{{ user.data.hp }}</td>
      <td>{{ user.data.age }}</td>
    </tr>
  </table>

  <h4>Post</h4>
  <form @submit.prevent="registerUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.id" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>전화번호</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <input type="submit" value="제출" />
    </table>
  </form>

  <h4>Put</h4>
  <form @submit.prevent="updateUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.id" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>전화번호</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <input type="submit" value="수정" />
    </table>
  </form>

  <h4>Delete</h4>
  <input type="text" v-model="inputTxt" />
  <button @click="btnDelteUserById">User 요청</button>
</template>
<style scoped></style>
