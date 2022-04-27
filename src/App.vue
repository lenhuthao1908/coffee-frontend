<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
    components: {
        AppHeader,
    },
    data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "nraboy",
                    password: "password"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
};
</script>

<template>
    <div id="app" >
        <div>
            <AppHeader v-if="authenticated"/>
            <router-link class="logout" v-if="authenticated" to="/login" v-on:click.native="logout()" replace>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Đăng Xuất
            </router-link>
            <div class="container mt-3">
            <router-view  @authenticated="setAuthenticated"/>
            </div>
        </div>
        
        
    </div>
</template>

<style>
.page {
    max-width: 400px;
    margin: auto;
}


.logout {
    position: absolute;
    right: 48px;
    top: 16px;
    color: #fff;
}

.logout:hover {
    text-decoration: none;
    color: red;
}
</style>

