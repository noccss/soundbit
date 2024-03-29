import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

var routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Inicial"
    },
    component: () => import("./views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Bem vindo ao SoundBit",
    },
    component: () => import("./views/auth/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    meta: {
      title: "Registre-se aqui",
    },
    component: () => import("./views/auth/SignUp.vue"),
  },
  {
      path: "/forgotPassword",
      name: "forgotPass",
      meta: {
          title: "Forgot password"
      },
      component: () => import("./views/auth/ForgotPass.vue"),
  }
];

Vue.prototype.allRoutes = routes;

const router = new Router({
  mode: "history",
  routes: routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});

export default router;
