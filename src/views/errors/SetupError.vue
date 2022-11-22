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
            <div class="empty-header">Configuration Error</div>
            <p class="empty-title">Please check your firebase configuration</p>
            <p class="empty-subtitle text-muted">...</p>
        </div>
    </div>
</template>
