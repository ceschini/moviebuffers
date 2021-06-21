import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: "/profile",
            name: "profile",
            // lazy-loaded
            component: () => import("./views/Profile.vue")
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("./views/BoardAdmin.vue")
        },
        {
            path: "/mod",
            name: "mod",
            component: () => import("./views/BoardModerator.vue")
        },
        {
            path: "/user",
            name: "user",
            component: () => import("./views/BoardUser.vue")
        },
        {
            path: "/",
            alias: "/movies",
            name: "movies",
            component: () => import("./components/MoviesList")
        },
        {
            path: "/movies/:id",
            name: "movie-details",
            component: () => import("./components/Movie")
        },
        {
            path: "/add",
            name: "add",
            component: () => import("./components/AddMovie")
        }
    ]
});

// handles unauthorized access
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});