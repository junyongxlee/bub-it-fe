import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Url from "../views/Url.vue";
import UrlDetail from "../views/UrlDetail.vue";
import UrlRedirect from "../views/UrlRedirect.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/url",
    name: "Url",
    component: Url,
  },
  {
    path: "/url/:alias",
    name: "UrlDetail",
    component: UrlDetail,
  },
  {
    path: "/:alias",
    name: "UrlRedirect",
    component: UrlRedirect,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
