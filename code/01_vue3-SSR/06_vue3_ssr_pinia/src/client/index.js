import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia"
import createRouter from "../router/index";
import App from "../App.vue";

const app = createApp(App);
const router = createRouter(createWebHistory())
const pinia = createPinia()

app.use(router)
app.use(pinia)
router.isReady().then(() => {
  app.mount("#app");
})
