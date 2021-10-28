import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Propuesta from "../views/Propuesta.vue";
import Actual from "../views/Actual.vue";
import Productos from "../views/Productos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/actual",
    name: "Actual",
    component: Actual,
  },
  {
    path: "/propuesta",
    name: "Propuesta",
    component: Propuesta,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
