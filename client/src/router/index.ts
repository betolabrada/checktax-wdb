import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Home",
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
    path: "/",
    name: "Log in",
    component: () => import("../views/Log-in.vue"),
  },
  {
    path: "/extension",
    name: "Extension",
    component: () => import("../views/Extension.vue"),
  },
  {
    path: "/alta",
    name: "Alta Cliente",
    component: () => import("../views/AltaCliente.vue"),
  },
  {
    path: "/manejocliente",
    name: "Manejo Cliente",
    component: () => import("../views/ManejoCliente.vue"),
  },
  {
    path: "/financiamiento",
    name: "Financiamiento",
    component: () => import("../views/Financiamiento.vue"),
  },
  {
    path: "/operacionessinplan",
    name: "Operaciones Sin Plan",
    component: () => import("../views/OperacionesSinPlanes.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
