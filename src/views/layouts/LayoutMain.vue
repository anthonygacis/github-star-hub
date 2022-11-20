<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../../stores/AuthStore.js";

function onLogout() {
    let auth = useAuthStore();
    auth.logout();
}

onMounted(() => {
    document.body.classList.remove("border-top-wide", "border-primary", "d-flex", "flex-column");
    document.querySelector(".page").classList.remove("page-center");
});
</script>
<template>
    <!-- Navbar -->
    <header class="navbar navbar-expand-md navbar-light d-print-none">
        <div class="container-xl">
            <button class="navbar-toggler" data-bs-target="#navbar-menu" data-bs-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <router-link :to="{ name: 'home' }">
                    <img alt="SorSU Web Cloud" class="navbar-brand-image" height="32" src="/logo.svg" width="110" />
                </router-link>
            </h1>
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
                        <a class="dropdown-item" href="#">Feedback</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="./settings.html">Settings</a>
                        <router-link class="dropdown-item" to="/login" @click.prevent="onLogout">Logout</router-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="navbar-expand-md">
        <div id="navbar-menu" class="collapse navbar-collapse">
            <div class="navbar navbar-light">
                <div class="container-xl">
                    <ul class="navbar-nav">
                        <router-link :to="{ name: 'home' }" class="nav-item text-decoration-none" exact>
                            <li class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <home-icon class="icon" />
                                </span>
                                <span class="nav-link-title"> Home </span>
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'projects' }" class="nav-item text-decoration-none">
                            <li class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <briefcase-icon class="icon" />
                                </span>
                                <span class="nav-link-title"> Projects </span>
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'deployment' }" class="nav-item text-decoration-none">
                            <li class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <rocket-icon class="icon" />
                                </span>
                                <span class="nav-link-title"> Deployment </span>
                            </li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="page-wrapper">
        <router-view />
        <footer class="footer footer-transparent d-print-none">
            <div class="container-xl">
                <div class="row text-center align-items-center flex-row-reverse">
                    <div class="col-lg-auto ms-lg-auto">
                        <ul class="list-inline list-inline-dots mb-0">
                            <li class="list-inline-item">
                                <a class="link-secondary" href="/status-page">Status Page</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul class="list-inline list-inline-dots mb-0">
                            <li class="list-inline-item">
                                Copyright &copy; 2022.
                                <a class="link-secondary" href="/">SorSU Web Cloud</a>. All rights reserved.
                            </li>
                            <li class="list-inline-item">
                                <a class="link-secondary" href="/" rel="noopener"> v0.0.1 </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
