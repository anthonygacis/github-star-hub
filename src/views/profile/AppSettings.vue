<script setup>
import AppMyAccount from "@/views/profile/settings/AppMyAccount.vue";
import { computed, onMounted, reactive } from "vue";

const side_nav = [
    {
        name: "my-account",
        text: "My Account",
        component: AppMyAccount,
    },
];

const state = reactive({
    active: "my-account",
});

const activeComponent = computed(() => {
    return side_nav.find((i) => i.name === state.active);
});

onMounted(() => {});
</script>
<template>
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">Settings</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="page-body">
        <div class="container-xl">
            <div class="card">
                <div class="row g-0">
                    <div class="col-3 d-none d-md-block">
                        <div class="card-body">
                            <h4 class="subheader">Profile settings</h4>
                            <div class="list-group list-group-transparent">
                                <a
                                    v-for="nav in side_nav"
                                    :key="nav.name"
                                    :class="{ active: nav.name === state.active }"
                                    class="list-group-item list-group-item-action d-flex align-items-center active"
                                    href="#"
                                    @click.prevent="state.active = nav.name"
                                >
                                    {{ nav.text }}
                                </a>
                            </div>
                            <h4 class="subheader mt-4">Experience</h4>
                            <div class="list-group list-group-transparent">
                                <a
                                    class="list-group-item list-group-item-action"
                                    href="https://github.com/anthonygacis/github-star-hub/issues"
                                    target="_blank"
                                >
                                    Give Feedback
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex flex-column">
                        <component :is="activeComponent.component" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
