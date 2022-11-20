import { createApp } from "vue";
import "@tabler/core/dist/js/tabler.min.js";
import "@tabler/core/dist/css/tabler.min.css";
import "@tabler/core/dist/css/tabler-vendors.min.css";
import "@tabler/core/dist/css/demo.min.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import VueTablerIcons from "vue-tabler-icons";

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(VueTablerIcons).mount("#app");
