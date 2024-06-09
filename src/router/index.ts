import { createMemoryHistory, createRouter } from "vue-router";

// import HomeView from "../views/HomeView.vue";
import PreviewView from "../views/PreviewView.vue";

const routes = [
  { path: "/", name: "home", component: PreviewView },
  {
    path: "/preview",
    name: "preview",
    component: () => import("../views/PreviewView.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
