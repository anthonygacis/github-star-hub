<script setup>
import { onMounted, reactive } from "vue";
import { useAuthStore } from "../../stores/AuthStore.js";
import { useRouter } from "vue-router";

const state = reactive({
    _is_pass_show: false,
});

const router = useRouter();

function togglePassShow() {
    state._is_pass_show = !state._is_pass_show;
}

function onSignUp() {
    let auth = useAuthStore();
    auth.is_auth = true;
    router.push("/setup");
}

onMounted(() => {
    document.body.classList.add("d-flex", "flex-column");
    document.querySelector(".page").classList.add("page-center");
});
</script>
<template>
    <div class="container container-tight py-4">
        <div class="text-center mb-4">
            <a class="navbar-brand navbar-brand-autodark" href="/"><img alt="" height="36" src="/logo.svg" /></a>
        </div>
        <div class="card card-md">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">Create new account</h2>
                <div class="mb-3">
                    <label class="form-label">Join Code: <span class="text-red">*</span></label>
                    <div class="input-group input-group-flat">
                        <input class="form-control" placeholder="xxx-xxx" type="text" />
                        <span class="input-group-text">
                            <a
                                class="input-group-link"
                                data-bs-target="#join-code"
                                data-bs-toggle="modal"
                                href="javascript:void(0)"
                                >What's this?</a
                            >
                        </span>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address: <span class="text-red">*</span></label>
                    <input class="form-control" placeholder="Enter email" type="email" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Password: <span class="text-red">*</span></label>
                    <div class="input-group input-group-flat">
                        <input
                            :type="state._is_pass_show ? 'text' : 'password'"
                            autocomplete="off"
                            class="form-control"
                            placeholder="Password"
                        />
                        <span class="input-group-text">
                            <span
                                class="link-secondary"
                                data-bs-toggle="tooltip"
                                title="Show password"
                                @click="togglePassShow"
                            >
                                <eye-off-icon v-if="!state._is_pass_show" class="icon" />
                                <eye-icon v-else class="icon" />
                            </span>
                        </span>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <span class="form-check-label"
                            >Agree the
                            <a
                                data-bs-target="#terms-policy"
                                data-bs-toggle="modal"
                                href="javascript:void(0)"
                                tabindex="-1"
                                >terms and policy</a
                            >.</span
                        >
                    </label>
                </div>
                <div class="form-footer">
                    <button class="btn btn-primary w-100" type="button" @click="onSignUp">Create new account</button>
                </div>
            </div>
        </div>
        <div class="text-center text-muted mt-3">
            Already have account?
            <router-link tabindex="-1" to="/login">Sign In</router-link>
        </div>
    </div>
    <teleport to="#external">
        <div id="join-code" aria-hidden="true" class="modal modal-blur fade" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Join Code</h5>
                        <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
                    </div>
                    <div class="modal-body">
                        Join Code is a unique combination of numbers. It is used to allow you to join on a certain
                        organization. To get this, kindly consult the immediate supervisor (e.g. team lead, instructor,
                        etc.).
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-dismiss="modal" type="button">Got it!</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="terms-policy" aria-hidden="true" class="modal modal-blur fade" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Terms and Policy</h5>
                        <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
                    </div>
                    <div class="modal-body">Terms and policy here...</div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-dismiss="modal" type="button">Got it!</button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>
