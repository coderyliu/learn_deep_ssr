import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/home.vue")
  },
  {
    path: "/about",
    component: () => import("../views/about.vue")
  }
];

export default (history) =>
  createRouter({
    routes,
    history
  });
