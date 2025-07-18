
   import { createRouter , createWebHistory } from 'vue-router'
        import Cart from '../pages/cart/cart.vue';
    import Home from '../pages/home/home.vue';
    import About from '../pages/about/about.vue';
    import HomeCourseDetail from "../pages/home-course-detail/home-course-detail.vue";
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
           id: 3, path: "/home-course-detail/:endpoint/:id", name:"home-course-detail", component: HomeCourseDetail
        },
        {
            id: 4, path: "/Cart", name: "Cart", component: Cart
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
