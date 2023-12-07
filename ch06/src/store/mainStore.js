//pinia 저장소
//저장소의 이름은 임의로 지정해주어도 된다.
import { defineStore } from "pinia";

//Pinia 전역스토어 생성 후 내보내기
export const useMainStore = defineStore("main", {
  /*
    state
    -store에서 관리하는 상태 선언
    -해당 store에서 관리하는 상태값 집합
    */

  state: () => {
    return {
      //앱에서 사용할 state를 선언
      title: "Hello Pinia",
      count: 0,
      cities: ["서울", "대전", "대구", "부산", "광주"],
      persons: [
        //object 배열
        { uid: "a101", name: "김유신", age: 23 },
        { uid: "a102", name: "김무신", age: 21 },
        { uid: "a103", name: "이유신", age: 33 },
        { uid: "a104", name: "최유신", age: 53 },
        { uid: "a105", name: "박유신", age: 27 },
      ],
    };
  },
  /*
    actions
    -store의 status를 변경할 때 사용하는 속성
    -setter라고 생각
    -비동기 처리로 직접 state 제어
        */

  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  /*
    getters
    -store를 반환하는 속성
    */

  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
});
