import { defineStore } from "pinia";
import { firebaseAuth } from "@/services/firebase/index.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export let useAuthStore = defineStore("auth", {
    state() {
        return {
            is_auth: false,
            user_cred: null,
        };
    },
    actions: {
        async login(email, password) {
            this.userCred = await signInWithEmailAndPassword(firebaseAuth, email, password);
            this.is_auth = true;
        },
        async logout() {
            await signOut(firebaseAuth);
            this.is_auth = false;
        },
    },
});
