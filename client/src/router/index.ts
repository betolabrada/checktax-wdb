import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
<<<<<<< HEAD
    path: "/admin",
    name: "Administrator",
=======
    path: "/login",
    name: "Log in",
>>>>>>> 9d1ae74123efd1747f8a658804ee61330329bf32
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
<<<<<<< HEAD
      import(/* webpackChunkName: "about" */ "../views/Administrator.vue"),
=======
      import(/* webpackChunkName: "about" */ "../views/Log-in.vue"),
>>>>>>> 9d1ae74123efd1747f8a658804ee61330329bf32
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
