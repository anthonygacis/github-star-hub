const Login = () => import("../../views/auth/AuthLogin.vue");
const SignUp = () => import("../../views/auth/AuthSignup.vue");
const LayoutMain = () => import("../../views/layouts/LayoutMain.vue");
const Home = () => import("../../views/AppHome.vue");
const Projects = () => import("../../views/AppProject.vue");

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
    {
        path: "/app",
        name: "app",
        component: LayoutMain,
        children: [
            {
                path: "home",
                name: "home",
                alias: ["/", "/app"],
                component: Home,
            },
            {
                path: "projects",
                name: "projects",
                component: Projects,
            },
        ],
    },
];

export default routes.map((route) => {
    const meta = {
        public: true,
        onlyLoggedOut: true,
    };

    return { ...route, meta };
});
