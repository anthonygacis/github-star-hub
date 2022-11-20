const Setup = () => import("../../views/setup/AppSetup.vue");
const Manage = () => import("../../views/AppManage.vue");
const LayoutMain = () => import("../../views/layouts/LayoutMain.vue");

const routes = [
    {
        path: "/setup",
        name: "setup",
        component: Setup,
    },
    {
        path: "/manage",
        name: "manage-app",
        component: LayoutMain,
        children: [
            {
                path: "hub",
                name: "manage-hub",
                component: Manage,
            },
        ],
    },
];

export default routes.map((route) => {
    return {
        ...route,
        meta: {
            public: false,
            exist: true,
        },
    };
});
