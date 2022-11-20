<script setup>
import { onMounted } from "vue";
import AppNavBar from "@/views/partials/AppNavBar.vue";
import { useAuthStore } from "@/stores/AuthStore.js";
import AppNavigation from "@/views/partials/AppNavigation.vue";

const auth = useAuthStore();

onMounted(() => {
    document.body.classList.remove("border-top-wide", "border-primary", "d-flex", "flex-column");
    document.querySelector(".page").classList.remove("page-center");
});
</script>
<template>
    <!-- Navbar -->
    <header class="navbar navbar-expand-md navbar-light d-print-none">
        <div class="container-xl">
            <button class="navbar-toggler" data-bs-target="#navbar-menu" data-bs-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <router-link :to="{ name: 'home' }">
                    <img alt="SorSU Web Cloud" class="navbar-brand-image" height="32" src="/logo.svg" width="110" />
                </router-link>
            </h1>
            <app-nav-bar v-if="auth.is_auth" />
        </div>
    </header>
    <app-navigation />
    <div class="page-wrapper">
        <router-view />
        <footer class="footer footer-transparent d-print-none">
            <div class="container-xl">
                <div class="row text-center align-items-center flex-row-reverse">
                    <div class="col-lg-auto ms-lg-auto">
                        <ul class="list-inline list-inline-dots mb-0">
                            <li class="list-inline-item">
                                <a class="link-secondary" href="/status-page">Status Page</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul class="list-inline list-inline-dots mb-0">
                            <li class="list-inline-item">
                                Copyright &copy; 2022.
                                <a class="link-secondary" href="/">Github Star Hub</a>. All rights reserved.
                            </li>
                            <li class="list-inline-item">
                                <a class="link-secondary" href="/" rel="noopener"> v0.0.1 </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
