import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
// pinia instance 생성
// import도 해주어야 함
// 저장소를 만들어주어야 함
const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
