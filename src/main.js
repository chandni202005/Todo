import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
const Home = () => import("./pages/Home.vue");
const Edit = () => import("./pages/Edit.vue");
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/edit", component: Edit, name: "edit" },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
