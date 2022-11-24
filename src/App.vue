<script setup>
import { onMounted } from "vue";
import { firebaseAuth } from "@/services/firebase/index.js";
import { useAuthStore } from "@/stores/AuthStore.js";

onMounted(() => {
    if (firebaseAuth.currentUser) {
        const auth = useAuthStore();
        auth.is_auth = true;
        auth.user_cred = firebaseAuth.currentUser;
    }
});
</script>
<template>
    <router-view />
</template>

<style>
@import url("https://rsms.me/inter/inter.css");

:root {
    --tblr-font-sans-serif: Inter, -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue,
        sans-serif;
}
</style>
