import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/pravidla",
      name: "pravidla",
      component: () => import("../views/RulesView.vue")
    },
    {
      path: "/o-nas",
      name: "O nás",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FaqView.vue")
    }
  ],
});

export default router;
