import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import createRouter from "../router/index";
import App from "../App.vue";

const app = createApp(App);
const router = createRouter(createWebHistory())

app.use(router)
router.isReady().then(() => {
  app.mount("#app");
})
