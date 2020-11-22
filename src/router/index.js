import Vue from "vue";
import VueRouter from "vue-router";
import display from "../views/display.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "display",
    component: display,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
