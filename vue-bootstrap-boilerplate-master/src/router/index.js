import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/pages/Home.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import("@/pages/Admin.vue"),
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: () =>
      import("@/pages/Teacher.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
