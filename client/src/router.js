import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/information",
      name: "info",
      component: () => import("./views/information")
    },
    {
      path: "/home",
      alias: "/homePage",
      name: "home",
      component: () => import("./views/home")
    }
  ]
});