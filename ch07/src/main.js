import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import router from "./router/index.js";
import { createPinia } from "pinia";
//로컬에 쿠키를 영속화 하기 위해서 플러그인 설치
//https://prazdevs.github.io/pinia-plugin-persistedstate/guide/
//에서 npm주소 복사한 후 설치
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia(piniaPluginPersistedstate);

createApp(App).use(router).use(pinia).mount("#app");
