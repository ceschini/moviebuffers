import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
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