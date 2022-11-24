<script setup>
import { useAuthStore } from "@/stores/AuthStore.js";
import { onBeforeMount, reactive } from "vue";
import { firestoreDb } from "@/services/firebase/index.js";
import { doc, setDoc } from "firebase/firestore";

const auth = useAuthStore();

const state = reactive({
    username: "",
});

async function updateGithubUsername() {
    const userRef = doc(firestoreDb, "users", auth.user_cred.uid);
    await setDoc(
        userRef,
        {
            settings: {
                username: state.username,
            },
        },
        {
            merge: true,
        }
    );
}

onBeforeMount(async () => {
    state.username = auth.user_data?.settings?.username;
});
</script>
<template>
    <div class="card-body border-start">
        <h2 class="mb-4 mt-3">Email Address</h2>
        <div class="row g-3">
            <div class="col-md-12">
                <input :value="auth.user_cred?.email" class="form-control" type="text" />
            </div>
        </div>
    </div>
    <div class="card-footer border bg-transparent mt-auto">
        <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <p class="m-0">Please use an active email.</p>
            </div>
            <div class="btn-list">
                <button class="btn btn-ghost-danger">Cancel</button>
                <button class="btn btn-primary" disabled>Save</button>
            </div>
        </div>
    </div>
    <div class="card-body border-start mt-3 border-top">
        <h2 class="mb-4 mt-3">Github Account</h2>
        <div class="row g-3">
            <div class="col-md-12">
                <input v-model="state.username" class="form-control" type="text" />
            </div>
        </div>
    </div>
    <div class="card-footer border bg-transparent mt-auto">
        <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <p class="m-0">Your active github username.</p>
            </div>
            <div class="btn-list">
                <button class="btn btn-ghost-danger">Cancel</button>
                <button class="btn btn-primary" @click="updateGithubUsername">Save</button>
            </div>
        </div>
    </div>
    <div class="card-body border-start mt-3 border-top">
        <h2 class="mb-4 mt-3">Password</h2>
        <div>
            <a class="btn" href="#"> Change password </a>
        </div>
    </div>
    <div class="card-footer border bg-transparent mt-auto mb-1">
        <div class="btn-list justify-content-end">
            <button class="btn btn-ghost-danger">Cancel</button>
            <button class="btn btn-primary" disabled>Save</button>
        </div>
    </div>
</template>
