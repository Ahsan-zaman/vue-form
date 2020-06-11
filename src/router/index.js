import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "form",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Main.vue"),
  },
  {
    path: "/verify",
    name: "verify",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Verify.vue"),
  },
  {
    path: "/*",
    name: "redirect",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Redirect.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
