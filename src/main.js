import { createApp } from "vue";
import "@tabler/core/dist/js/tabler.min.js";
import "@tabler/core/dist/css/tabler.min.css";
import "@tabler/core/dist/css/tabler-vendors.min.css";
import "@tabler/core/dist/css/demo.min.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import VueTablerIcons from "vue-tabler-icons";
import { firebaseAuth } from "@/services/firebase/index.js";

let app = null;
firebaseAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);
        app.use(router);
        app.use(createPinia());
        app.use(VueTablerIcons);
        app.directive("tooltip", {
            mounted(el, binding) {
                new bootstrap.Tooltip(el, {
                    title: binding.value,
                    placement: "top",
                    trigger: "hover",
                });
            },
            beforeUnmount(el) {
                let tooltip = bootstrap.Tooltip.getInstance(el);
                tooltip?.dispose();
            },
        });
        app.mount("#app");
    }
});
