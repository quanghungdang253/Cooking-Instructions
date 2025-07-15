
    import { createRouter , createWebHistory} from "vue-router";
    import Home from '../pages/home/home.vue';
    import About from '../pages/about/about.vue';

    const routes = [
        {
            id: 0 , path: "/" , component: Home
        },
        {
            id: 1 , path: "/About" , component: About
        }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes
    })



    export default router;
