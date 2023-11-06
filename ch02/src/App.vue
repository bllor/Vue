<script>
export default {
  name: "app",
  methods: {
    handler1: function () {
      alert("button1!");
    },

    handler2: function (e) {
      alert(e);
    },

    handler3: function () {
      alert("button3");
    },

    countUp: function () {
      this.count++;
    },

    changeCity: function (e) {
      alert(e.target.value);
    },

    formUser1(e) {
      e.preventDefault();
      const uid = e.target.elements.uid.value;
      const name = e.target.elements.name.value;
      const age = e.target.elements.age.value;

      console.log("uid : " + uid);
      console.log("name : " + name);
      console.log("age : " + age);
    },

    formUser2() {
      console.log("uid : " + this.myUser.uid);
      console.log("name : " + this.myUser.name);
      console.log("age : " + this.myUser.age);
    },
  },

  data() {
    return {
      tit1: "Hello Vue!",
      tit2: "Welcome Vue!",
      tit3: "",
      result1: true,
      result2: false,
      score: 89,
      cities: ["서울", "대전", "대구", "부산", "광주"],
      persons: [
        { uid: "a101", name: "김유신", age: 23 },
        { uid: "a102", name: "김춘추", age: 33 },
        { uid: "a103", name: "장보고", age: 43 },
        { uid: "a104", name: "강감찬", age: 53 },
        { uid: "a105", name: "이순신", age: 24 },
      ],
      value1: "tit1",
      value2: "tit2",
      count: 0,
      isActive: false,
      img1: "/img/flower1.jpg",
      img2: "/img/flower2.jpg",
      link1: "https://naver.com",
      link2: "https://daum.net",
      myStyle: { width: "100px", height: "100px", background: "orange" },
      myName: "홍길동",
      myText: "",
      myCheck: false,
      myCities: [],
      myUser: { uid: "", name: "", age: 0 },
    };
  },
};
// return 되는 데이터가 template에 출력이 된다.
</script>

<template>
  <h3>Ch02. Vue Directive</h3>
  <h4>1) v-text</h4>
  <p v-text="tit1"></p>
  <p>{{ tit2 }}</p>

  <h4>2) v-show</h4>

  <p v-show="result1">show result1</p>
  <p v-show="result2">show result2</p>

  <h4>3) v-if</h4>

  <p v-if="result1">if result1</p>
  <p v-if="result2">if result2</p>
  <p v-else>if else result2</p>
  <p v-if="score >= 90">A</p>
  <p v-else-if="score >= 80">b</p>
  <p v-else-if="score >= 70">c</p>
  <p v-else-if="score >= 60">d</p>
  <p v-else>F</p>

  <p v-if="tit3">{{ tit3 }}</p>
  <p v-else>tit3 empty</p>

  <h4>4) v-for</h4>

  <ul>
    <li v-for="i in 3">i:{{ i }}</li>
  </ul>

  <ul>
    <li v-for="city in cities">{{ city }}</li>
  </ul>

  <table>
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>나이</th>
    </tr>
    <tr v-for="person in persons">
      <td>{{ person.uid }}</td>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
    </tr>
  </table>

  <h4>5) v-on</h4>
  <button v-on:click="handler1">button1</button>
  <button v-on:click="handler2(10)">button2</button>
  <button @click="handler3">button3</button>

  <p>count:{{ count }}</p>
  <button @click="countUp">증가</button>

  <select v-on:change="changeCity">
    <option>서울</option>
    <option>대전</option>
    <option>대구</option>
    <option>부산</option>
    <option>광주</option>
  </select>

  <form v-on:submit.prevent="formUser1" method="post">
    아이디 : <input type="text" name="uid" /><br />
    이름 :<input type="text" name="name" /><br />
    나이 : <input type="text" name="age" /><br />
    <input type="submit" value="전송" />
  </form>

  <h4>6) v-bind</h4>
  <!-- 중요 -->
  <!-- 
    파일경로를 public에 놔둔다
    v:bind는 :와 같은 형태로 사용할 수 있다.
  -->
  <img v-bind:src="img1" alt="flower1" />
  <img :src="img2" alt="flower2" /><br />
  <a v-bind:href="link1">네이버</a>
  <a :href="link1">다음</a>

  <div :style="myStyle"></div>

  <h4>7) v-model</h4>
  <!-- 중요 -->
  <!--
    양방향 바인딩을 처리해주는 메서드
    
  -->
  <p>이름 : {{ myName }}</p>
  <input type="text" placeholder="이름입력" v-model="myName" />
  <!-- 
    input에 myName값이 변경되면 vue에서도 변경된 myName값이 반영되어서 나타난다.
    myName이라는 데이터를 수정하면 바로 반영시켜준다. -->

  <p>{{ myText }}</p>
  <p>문자개수:{{ myText.length }}</p>
  <textarea v-model="myText" cols="30" rows="10"></textarea>

  <p>
    <label><input type="checkbox" v-model="myCheck" />체크박스</label>
    체크상태:{{ myCheck }}
  </p>
  <p>
    {{ myCities }}<br />
    <label><input type="checkbox" v-model="myCities" value="서울" />서울</label>
    <label><input type="checkbox" v-model="myCities" value="대전" />대전</label>
    <label><input type="checkbox" v-model="myCities" value="대구" />대구</label>
    <label><input type="checkbox" v-model="myCities" value="부산" />부산</label>
    <label><input type="checkbox" v-model="myCities" value="광주" />광주</label>
  </p>

  <form @:submit.prevent="formUser2" method="post">
    아이디 : <input type="text" v-model="myUser.uid" /><br />
    이름 :<input type="text" v-model="myUser.name" /><br />
    나이 : <input type="text" v-model="myUser.age" /><br />
    <input type="submit" value="전송" />
  </form>
</template>

<style scoped></style>
