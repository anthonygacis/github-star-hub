<script setup>
import { useAuthStore } from "@/stores/AuthStore.js";

const auth = useAuthStore();
</script>
<template>
    <div class="navbar-expand-md">
        <div id="navbar-menu" class="collapse navbar-collapse">
            <div class="navbar navbar-light">
                <div class="container-xl">
                    <ul class="navbar-nav">
                        <router-link :to="{ name: 'home' }" class="nav-item text-decoration-none" exact>
                            <li class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <home-icon class="icon" />
                                </span>
                                <span class="nav-link-title"> Home </span>
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'projects' }" class="nav-item text-decoration-none">
                            <li class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <briefcase-icon class="icon" />
                                </span>
                                <span class="nav-link-title"> Projects </span>
                            </li>
                        </router-link>
                        <router-link
                            v-if="auth.is_auth"
                            :to="{ name: 'manage-hub' }"
                            class="nav-item text-decoration-none"
                        >
                            <li class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <brand-github-icon class="icon" />
                                </span>
                                <span class="nav-link-title"> Manage Hub </span>
                            </li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
