import { createRouter, createWebHistory } from "vue-router";

let routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@pages/Home.vue"),
  },
  {
    path: "/techno",
    name: "Techno",
    component: () => import("@pages/Techno.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@pages/Contact.vue"),
  },
  {
    path: "/input",
    name: "Input",
    component: () => import("@pages/Input.vue"),
  },
  {
    path: "/button",
    name: "Button",
    component: () => import("@pages/Button.vue"),
  },
  {
    path: "/heapdumps",
    name: "Heapdumps",
    component: () => import("@pages/Heapdumps.vue"),
  },
  {
    path: "/waiting",
    name: "Waiting",
    component: () => import("@pages/Waiting.vue"),
  },
  {
    path: "/notFound",
    name: "NotFound",
    component: () => import("@pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  window.scrollTo(0, 0);

  if (to.matched.length === 0) {
    //ici si pas de matched page
    return { name: "NotFound" };
  }
});

export default router;
