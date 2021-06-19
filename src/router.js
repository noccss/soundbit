import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

    var routes = [
        { 
            path: '/login',
            name: 'login',
            meta: {
                title: 'Bem vindo ao SoundBit'
            },
            component: () => 
                import('./views/auth/Login.vue') 
        }
    ]

    Vue.prototype.allRoutes = routes

    const router = new Router({
      routes: routes
    })
    router.beforeEach((to, from, next) => {
        if (to.meta.title) {
          document.title = to.meta.title
        }

        next()
    })

export default router
