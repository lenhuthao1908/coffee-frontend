import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue"
import Home from "@/views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/coffees/add",
        name: "coffee.add",
        component: () => import("@/views/CoffeeAdd.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts/:id",
        name: "coffee.update",
        component: () => import("@/views/CoffeeUpdate.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;