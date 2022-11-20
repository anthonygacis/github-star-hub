<script setup>
import { reactive } from "vue";

const state = reactive({
    project_types: [
        {
            image: "/icons/javascript-icon.svg",
            text: "Vanilla Javascript",
        },
        {
            image: "/icons/vuejs-icon.svg",
            text: "VueJs",
        },
        {
            image: "/icons/nuxtjs-icon.svg",
            text: "NuxtJs",
        },
        {
            image: "/icons/reactjs-icon.svg",
            text: "React",
        },
        {
            image: "/icons/nextjs.svg",
            text: "Next.js",
        },
        {
            image: "/icons/Svelte.svg",
            text: "Svelte",
        },
        {
            image: "/icons/php-icon.svg",
            text: "PHP",
        },
        {
            image: "/icons/laravel-icon.svg",
            text: "Laravel",
        },
    ],
});
</script>
<template>
    <div class="card-body">
        <div class="mb-3">
            <label class="form-label">Project Type</label>
            <div class="form-selectgroup form-selectgroup-boxes d-flex flex-column">
                <label
                    v-for="project in state.project_types"
                    :key="project.text"
                    class="form-selectgroup-item flex-fill"
                >
                    <input class="form-selectgroup-input" name="form-payment" type="radio" value="visa" />
                    <div class="form-selectgroup-label d-flex align-items-center p-3">
                        <div class="me-3">
                            <span class="form-selectgroup-check"></span>
                        </div>
                        <div class="d-flex align-items-center">
                            <span
                                :style="{
                                    'background-image': `url('${project.image}')`,
                                }"
                                class="me-3"
                                style="
                                    background-size: contain;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    height: 2.5rem;
                                    width: 2.5rem;
                                "
                            ></span>
                            {{ project.text }}
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>
