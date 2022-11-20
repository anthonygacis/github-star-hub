const LayoutMain = () => import("../../views/layouts/LayoutMain.vue");
const Home = () => import("../../views/AppHome.vue");
const Projects = () => import("../../views/AppProject.vue");
const Deployment = () => import("../../views/AppDeployment.vue");
const Setup = () => import("../../views/setup/AppSetup.vue");

const routes = [
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
            {
                path: "deployment",
                name: "deployment",
                component: Deployment,
            },
        ],
    },
    {
        path: "/setup",
        name: "setup",
        component: Setup,
    },
];

export default routes.map((route) => {
    return { ...route, meta: { public: false } };
});
