<script setup>
import { onMounted, reactive } from "vue";
import { useGithubStore } from "@/stores/GithubStore.js";
import { parseLinkHeader } from "@web3-storage/parse-link-header";

const state = reactive({
    username: "",
    github_repos: [],
    current_page: 1,
    last_page: 1,
    is_edit: false,
});

async function loadMore() {
    if (state.current_page < state.last_page) {
        const github = useGithubStore();
        try {
            const res = await github.getStarred(state.username, state.current_page + 1);
            state.github_repos = state.github_repos.concat(res.data);
            state.current_page++;
        } catch (error) {
            console.log(error);
        }
    }
}

function onEdit() {
    state.is_edit = true;
}

async function onUpdate() {
    state.is_edit = false;
    const github = useGithubStore();
    try {
        const res = await github.getStarred(state.username);
        const link = parseLinkHeader(res.headers.link);
        state.github_repos = res.data;
        state.current_page = 1;
        state.last_page = parseInt(link.last.page);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {});
</script>
<template>
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">Manage Hub</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="page-body">
        <div class="container-xl">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="input-group">
                                <span class="input-group-text"> Github Username: </span>
                                <input
                                    v-model="state.username"
                                    :disabled="!state.is_edit"
                                    autocomplete="off"
                                    class="form-control"
                                    placeholder="your_username"
                                    type="text"
                                    @keyup.enter="onUpdate"
                                />
                                <span class="input-group-text">
                                    <a
                                        v-if="state.is_edit"
                                        v-tooltip="'Update username'"
                                        class="link-secondary"
                                        href="#"
                                        @click.prevent="onUpdate"
                                    >
                                        <check-icon class="icon" />
                                    </a>
                                    <a
                                        v-if="!state.is_edit"
                                        v-tooltip="'Edit username'"
                                        class="link-secondary"
                                        href="#"
                                        @click.prevent="onEdit"
                                    >
                                        <edit-icon class="icon" />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="card-body">
                            <h1>Current: {{ state.current_page }} | Last: {{ state.last_page }}</h1>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Url</th>
                                        <th>Stars</th>
                                        <th>Forks</th>
                                        <th>Language</th>
                                        <th>Topics</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(repo, index) in state.github_repos" :key="repo.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ repo.full_name }}</td>
                                        <td>{{ repo.html_url }}</td>
                                        <td>{{ repo.stargazers_count }}</td>
                                        <td>{{ repo.forks_count }}</td>
                                        <td>{{ repo.language }}</td>
                                        <td>{{ repo.topics.join(", ") }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn btn-primary btn-sm" @click="loadMore">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
