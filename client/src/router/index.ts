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
    path: "/config",
    name: "Config",
    component: () => import("../views/Config.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/admin",
    name: "Administrator",
    component: () => import("../views/Administrator.vue"),
  },
  {
    path: "/login",
    name: "Log in",
    component: () => import("../views/Log-in.vue"),
  },
  {
    path: "/extension",
    name: "Extension",
    component: () => import("../views/Extension.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
