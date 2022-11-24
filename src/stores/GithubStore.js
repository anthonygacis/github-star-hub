import { defineStore } from "pinia";
import axios from "axios";

let domain = "https://api.github.com";
export let useGithubStore = defineStore("github", {
    state() {
        return {};
    },
    actions: {
        async getStarred(username, page = 1) {
            const params = {
                page,
                sort: "stars",
                direction: "desc",
            };
            const query_params = new URLSearchParams(params);
            return await axios.get(domain + "/users/" + username + "/starred?" + query_params);
        },
    },
});
