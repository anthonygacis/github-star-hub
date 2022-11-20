import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import publicRoutes from "./routes/public.js";
import privateRoutes from "./routes/private.js";
import "nprogress/nprogress.css";
import { useAuthStore } from "../stores/AuthStore.js";

const NotFound = () => import("../views/errors/NotFound.vue");

const routes = [
    ...publicRoutes,
    ...privateRoutes,
    {
        path: "/:catchAll(.*)*",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    let auth = useAuthStore();
    const authenticated = auth.is_auth;
    // const onlyLoggedOut = to.matched.some((record) => record.meta.onlyLoggedOut);
    const isPublic = to.matched.some((record) => record.meta.public);
    if (!isPublic && !authenticated) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return next({
            path: "/login",
            query: { redirect: to.fullPath },
        });
    }
    // if (authenticated && onlyLoggedOut) {
    //     return next("/");
    // }

    next();
});

router.afterEach(() => {
    NProgress.done();
});

export { router, routes };
