<template>
    <!-- Page header -->
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">Home</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- Page body -->
    <div class="page-body">
        <div class="container-xl">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="empty">
                                <div class="empty-icon">
                                    <calendar-stats-icon class="icon" />
                                </div>
                                <p class="empty-title">Class Group Name</p>
                                <p class="empty-subtitle text-muted">This is your class group</p>
                                <div class="empty-action">
                                    <a class="btn btn-primary" href="#">
                                        <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                                        <svg
                                            class="icon icon-tabler icon-tabler-search"
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
                                            <circle cx="10" cy="10" r="7"></circle>
                                            <line x1="21" x2="15" y1="21" y2="15"></line>
                                        </svg>
                                        Search again
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
