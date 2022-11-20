const Setup = () => import("../../views/setup/AppSetup.vue");

const routes = [
    {
        path: "/setup",
        name: "setup",
        component: Setup,
    },
];

export default routes.map((route) => {
    return { ...route, meta: { public: false } };
});
