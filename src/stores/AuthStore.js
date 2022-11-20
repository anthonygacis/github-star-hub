import { defineStore } from "pinia";

export let useAuthStore = defineStore("auth", {
    state() {
        return {
            is_auth: true,
        };
    },
    actions: {
        logout() {
            this.is_auth = false;
        },
    },
});
