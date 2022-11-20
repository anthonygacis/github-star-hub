<script setup>
import { onMounted, reactive } from "vue";
import { useAuthStore } from "../../stores/AuthStore.js";
import { useRoute, useRouter } from "vue-router";

const state = reactive({
    email: "",
    password: "",
    _is_disabled: false,
    _is_pass_show: false,
    _is_processing: false,
});

const router = useRouter();
const route = useRoute();

function togglePassShow() {
    state._is_pass_show = !state._is_pass_show;
}

function handleSignIn() {
    state._is_processing = true;
    setTimeout(() => {
        let auth = useAuthStore();

        auth.is_auth = true;
        state._is_processing = false;
        if (route.query.redirect) {
            router.push(route.query.redirect.toString());
        } else {
            router.push("/");
        }
    }, 700);
}

onMounted(() => {
    document.body.classList.add("d-flex", "flex-column");
    document.querySelector(".page").classList.add("page-center");
});
</script>

<template>
    <div class="container container-normal py-4">
        <div class="row align-items-center g-4">
            <div class="col-lg">
                <div class="container-tight">
                    <div class="text-center mb-4">
                        <a class="navbar-brand navbar-brand-autodark">
                            <img alt="" height="36" src="/logo.svg" />
                        </a>
                    </div>
                    <div class="card card-md">
                        <div class="card-body">
                            <h2 class="h2 text-center mb-4">Login to your account</h2>
                            <form autocomplete="off" method="get" novalidate @submit.prevent="">
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input
                                        v-model="state.email"
                                        :disabled="state._is_disabled"
                                        autocomplete="on"
                                        class="form-control"
                                        placeholder="your@email.com"
                                        type="email"
                                    />
                                </div>
                                <div class="mb-2">
                                    <label class="form-label">
                                        Password
                                        <span class="form-label-description">
                                            <a href="./forgot-password.html">I forgot password</a>
                                        </span>
                                    </label>
                                    <div class="input-group input-group-flat">
                                        <input
                                            v-model="state.password"
                                            :disabled="state._is_disabled"
                                            :type="state._is_pass_show ? 'text' : 'password'"
                                            autocomplete="off"
                                            class="form-control"
                                            placeholder="Your password"
                                        />
                                        <span class="input-group-text">
                                            <span
                                                class="link-secondary"
                                                data-bs-toggle="tooltip"
                                                title="Show password"
                                                @click="togglePassShow"
                                            >
                                                <svg
                                                    v-if="!state._is_pass_show"
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
                                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                    <line x1="3" x2="21" y1="3" y2="21"></line>
                                                    <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                                                    <path
                                                        d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"
                                                    ></path>
                                                </svg>
                                                <svg
                                                    v-else
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
                                                    <circle cx="12" cy="12" r="2" />
                                                    <path
                                                        d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <label class="form-check">
                                        <input class="form-check-input" type="checkbox" />
                                        <span class="form-check-label">Remember me on this device</span>
                                    </label>
                                </div>
                                <div class="form-footer">
                                    <button
                                        :disabled="state._is_processing"
                                        class="btn btn-primary w-100"
                                        type="submit"
                                        @click="handleSignIn"
                                    >
                                        <span v-if="state._is_processing">
                                            <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                                            Loading ...
                                        </span>
                                        <span v-else>Sign in</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="hr-text">or</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <a class="btn btn-white w-100" href="#">
                                        <svg
                                            class="icon text-google"
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
                                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                                        </svg>
                                        Login with Google
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-muted mt-3">
                        Don't have account yet?
                        <router-link tabindex="-1" to="/sign-up">Sign up</router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg d-none d-lg-block">
                <img alt="" class="d-block mx-auto" height="300" src="/undraw_secure_login_pdn4.svg" />
            </div>
        </div>
    </div>
</template>
