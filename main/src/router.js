import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/origin*",
    name: "app-origin",
    component: () =>
      import(/* webpackChunkName: "angular11" */ "./pages/origin.vue"),
  },
  {
    path: "/app-vue2*",
    name: "app-vue2",
    component: () => import(/* webpackChunkName: "vue2" */ "./pages/vue2.vue"),
  },
  {
    path: "/app-vue3*",
    name: "app-vue3",
    component: () => import(/* webpackChunkName: "vue3" */ "./pages/vue3.vue"),
  },
];

export default routes;
