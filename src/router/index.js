import Vue from "vue";
import VueRouter from "vue-router";
import DashBoardComponent from "../views/Home.vue";
import HistoryComponent from "../views/History.vue";
import StarredComponent from "../views/Starred.vue";
import InfoComponent from "../views/Info.vue";
import SettingsComponent from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashBoardComponent,
  },
  {
    path: "/history",
    name: "About",

    component: HistoryComponent,
  },
  {
    path: "/starred",
    name: "Starred",

    component: StarredComponent,
  },
  {
    path: "/info",
    name: "Info",

    component: InfoComponent,
  },
  {
    path: "/Settings",
    name: "Settings",

    component: SettingsComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
