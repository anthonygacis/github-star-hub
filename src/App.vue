<script setup>
import { onBeforeMount, ref } from "vue";
import { firebaseAuth, isConfigured } from "@/services/firebase/index.js";
import { useAuthStore } from "@/stores/AuthStore.js";
import SetupError from "@/views/errors/SetupError.vue";

const hasError = ref(false);

onBeforeMount(() => {
    if (isConfigured) {
        if (firebaseAuth.currentUser) {
            const auth = useAuthStore();
            auth.is_auth = true;
            auth.user_cred = firebaseAuth.currentUser;
        }
    } else {
        hasError.value = true;
    }
});
</script>
<template>
    <router-view v-if="!hasError" />
    <setup-error v-else />
</template>

<style>
@import url("https://rsms.me/inter/inter.css");

:root {
    --tblr-font-sans-serif: Inter, -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue,
        sans-serif;
}
</style>
