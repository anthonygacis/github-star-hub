<script setup>
import { useAuthStore } from "@/stores/AuthStore.js";
import { useRouter } from "vue-router";

const router = useRouter();

async function onLogout() {
    let auth = useAuthStore();
    try {
        await auth.logout();
        await router.push("/");
    } catch (error) {
        console.log(error);
    }
}
</script>
<template>
    <div class="navbar-nav flex-row order-md-last">
        <div class="d-none d-md-flex">
            <div class="nav-item dropdown d-none d-md-flex me-3">
                <a
                    aria-label="Show notifications"
                    class="nav-link px-0"
                    data-bs-toggle="dropdown"
                    href="#"
                    tabindex="-1"
                >
                    <bell-icon class="icon" />
                    <span class="badge bg-red"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Last updates</h3>
                        </div>
                        <div class="list-group list-group-flush list-group-hoverable">
                            <div class="list-group-item">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span class="status-dot status-dot-animated bg-red d-block"></span>
                                    </div>
                                    <div class="col text-truncate">
                                        <a class="text-body d-block" href="#">Example 1</a>
                                        <div class="d-block text-muted text-truncate mt-n1">
                                            Change deprecated html tags to text decoration classes (#29604)
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <a class="list-group-item-actions" href="#">
                                            <star-icon class="icon text-muted" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span class="status-dot d-block"></span>
                                    </div>
                                    <div class="col text-truncate">
                                        <a class="text-body d-block" href="#">Example 2</a>
                                        <div class="d-block text-muted text-truncate mt-n1">
                                            justify-content:between ⇒ justify-content:space-between (#29734)
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <a class="list-group-item-actions show" href="#">
                                            <star-icon class="icon text-yellow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span class="status-dot d-block"></span>
                                    </div>
                                    <div class="col text-truncate">
                                        <a class="text-body d-block" href="#">Example 3</a>
                                        <div class="d-block text-muted text-truncate mt-n1">
                                            Update change-version.js (#29736)
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <a class="list-group-item-actions" href="#">
                                            <star-icon class="icon text-muted" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <span class="status-dot status-dot-animated bg-green d-block"></span>
                                    </div>
                                    <div class="col text-truncate">
                                        <a class="text-body d-block" href="#">Example 4</a>
                                        <div class="d-block text-muted text-truncate mt-n1">
                                            Regenerate package-lock.json (#29730)
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <a class="list-group-item-actions" href="#">
                                            <star-icon class="icon text-muted" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-item dropdown">
            <a
                aria-label="Open user menu"
                class="nav-link d-flex lh-1 text-reset p-0"
                data-bs-toggle="dropdown"
                href="#"
            >
                <span class="avatar avatar-sm" style="background-image: url('/logo-icon.svg')"></span>
                <div class="d-none d-xl-block ps-2">
                    <div>Juan Dela Cruz</div>
                    <div class="mt-1 small text-muted">Project Leader</div>
                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a class="dropdown-item" href="#">Status</a>
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="https://github.com/anthonygacis/github-star-hub/issues" target="_blank">
                    Feedback
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="./settings.html">Settings</a>
                <a class="dropdown-item" href="#" @click.prevent="onLogout">Logout</a>
            </div>
        </div>
    </div>
</template>
