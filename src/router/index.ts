import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/CalendarView.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
