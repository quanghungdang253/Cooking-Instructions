
    import { createRouter , createWebHistory} from "vue-router";
    import Home from '../pages/home/home.vue';
    import About from '../pages/about/about.vue';
    import HomeCourseDetail from "@/hooks/use-handle-detail/use-home-course-detail";
    import familyCookingCourse from "@/pages/family-cooking-course/family-cooking-course.vue";

    const routes = [
        {
            id: 0 , path: "/" ,   name: "Home" , component: Home
        },
        {
            id: 1 , path: "/About", name: "About" , component: About
        },
        {
            id: 2, path:"/familyCookingCourse", name: "familyCookingCourse", component: familyCookingCourse
        },
         {
             path: "/:pathMatch(.*)*",
             redirect: "/"  // Hoặc có thể trỏ đến component 404
        }
    ]

    const router = createRouter({
        history:  createWebHistory(import.meta.env.BASE_URL),
        routes,
         scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
    })



    export default router;
