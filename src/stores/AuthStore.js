import { defineStore } from "pinia";
import { firebaseAuth, firestoreDb } from "@/services/firebase/index.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export let useAuthStore = defineStore("auth", {
    state() {
        return {
            is_auth: false,
            user_cred: null,
            user_data: null,
        };
    },
    actions: {
        async login(email, password) {
            const userCred = await signInWithEmailAndPassword(firebaseAuth, email, password);
            this.is_auth = true;
            this.user_cred = userCred.user;
            this.user_data = await this.getAuthUserData();
        },
        async logout() {
            await signOut(firebaseAuth);
            this.is_auth = false;
            this.user_cred = null;
        },
        async getAuthUserData() {
            const userRef = doc(firestoreDb, "users", this.user_cred.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                return userSnap.data();
            }
            return {};
        },
    },
});
