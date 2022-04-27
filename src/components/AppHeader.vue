<template>
    <div class = "over">
        <nav class="navbar navbar-expand navbar-dark navbar-css">
        <a href="/" class="navbar-brand">Cafe Management App</a>
        <div class="mr-auto navbar-nav  navbar-nav-css">
            <li class="nav-item list-item">
                <router-link :to="{ name: 'home' }" class="nav-link-css">
                    <i class="fa-solid fa-house"></i>
                    Trang chủ
                </router-link>
            </li>


            <li class="nav-item list-item">
                <router-link :to="{name: ''}" class="nav-link-css">
                    <i class="fa-solid fa-address-card"></i>
                    Liên hệ
                </router-link>
            </li>
        </div>

    </nav>
    </div>
</template>

<style>
    .over {
        background-color: #006400;
    }
    .navbar-css {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .navbar-nav-css {
        margin-left: 50px;
    }

    .nav-link-css {
        font-size: 16px;
        color: #fff;
    }

    .nav-link-css:hover {
        color: #ccc;
        text-decoration: none;
    }

    .nav-link-css i {
        margin-right: 4px;
    }

    .user-login ul {
        display:inline-block
    }

    .list-css {
        display: inline-block;
        list-style-type: none;
        padding: 4px;
    }

    .list-item {
        margin-right: 60px;
    }
</style>

<script>
    export default {
        
}
</script>