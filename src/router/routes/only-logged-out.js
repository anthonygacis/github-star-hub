const Login = () => import("../../views/auth/AuthLogin.vue");

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
];

export default routes.map((route) => {
    const meta = {
        public: true,
        onlyLoggedOut: true,
        exist: true,
    };

    return { ...route, meta };
});
