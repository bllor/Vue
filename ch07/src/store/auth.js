import { defineStore } from "pinia";
import axios from "axios";

//사용자 인증처리 전역 저장소
export const useAuthStore = defineStore("auth", {
  persist: true, //여기에 저장되는 값을 영속화시킴
  state: () => {
    return {
      //전역으로 관리하는 상태값
      user: null,
      accessToken: null,
      refreshToken: null,
    };
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setAccessToken(accessToken) {
      this.accessToken = accessToken;
    },
    setRefreshToken(refreshToken) {
      this.refreshToken = refreshToken;
    },
    async login(user) {
      try {
        const response = await axios.post("http://localhost:8080/login", user);

        //전역 스토어 상태값 업데이트
        this.accessToken = response.data.accessToken;
        this.refreshToken = response.data.refreshToken;
        this.user = response.data.user;

        //로컬스토리지 저장
        console.log("responseAccessToken : " + response.data.accessToken);
        console.log("responserefreshToken : " + response.data.refreshToken);
        return response;
      } catch (err) {
        throw err;
      }
    },

    logout() {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getAccessToken: (state) => {
      return state.accessToken;
    },
    getRefreshToken: (state) => {
      return state.refreshToken;
    },
  },
});
