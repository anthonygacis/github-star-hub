<script setup>
import { onMounted } from "vue";

onMounted(() => {
    document.body.classList.add("border-top-wide", "border-primary", "d-flex", "flex-column");
    document.querySelector(".page").classList.add("page-center");
});
</script>

<template>
    <div class="container-tight py-4">
        <div class="empty">
            <div class="empty-header">404</div>
            <p class="empty-title">Oops… You just found an error page</p>
            <p class="empty-subtitle text-muted">We are sorry but the page you are looking for was not found</p>
            <div class="empty-action">
                <router-link class="btn btn-primary" to="/">
                    <!-- Download SVG icon from http://tabler-icons.io/i/arrow-left -->
                    <svg
                        class="icon"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                        <line x1="5" x2="19" y1="12" y2="12" />
                        <line x1="5" x2="11" y1="12" y2="18" />
                        <line x1="5" x2="11" y1="12" y2="6" />
                    </svg>
                    Take me home
                </router-link>
            </div>
        </div>
    </div>
</template>
