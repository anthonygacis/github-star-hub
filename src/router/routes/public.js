const Login = () => import("../../views/auth/AuthLogin.vue");
const SignUp = () => import("../../views/auth/AuthSignup.vue");

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/sign-up",
        name: "signup",
        component: SignUp,
    },
];

export default routes.map((route) => {
    const meta = {
        public: true,
        onlyLoggedOut: true,
    };

    return { ...route, meta };
});
