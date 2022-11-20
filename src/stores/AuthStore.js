import { defineStore } from "pinia";

export let useAuthStore = defineStore("auth", {
    state() {
        return {
            is_auth: false,
        };
    },
    actions: {
        logout() {
            this.is_auth = false;
        },
    },
});
