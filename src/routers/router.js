
   import { createRouter , createWebHistory } from 'vue-router'
        import Cart from '../pages/cart/cart.vue';
        
    import Home from '../pages/home/home.vue';
    import About from '../pages/about/about.vue';
    import HomeCourseDetail from "../pages/home-course-detail/home-course-detail.vue";
    import familyCookingCourse from "@/pages/family-cooking-course/family-cooking-course.vue";
    import healthArticlesPage from '@/pages/health-articles-page/health-articles-page.vue';
    import foodEveryday from '@/pages/food-everyday/food-everyday.vue';
    import foodEveryDayDetail from '@/pages/food-everyday-detail/food-everyday-detail.vue';

    const routes = [
        {
            id: 0 , path: "/" , 
            name: "Home" , 
            component: Home
        },
        {
            id: 1 , path: "/About",
            name: "About" ,
            component: About
        },
        {
            id: 2,
            path:"/familyCookingCourse",
            name: "familyCookingCourse", 
            component: familyCookingCourse
        },
        {
           id: 3,
           path: "/home-course-detail/:endpoint/:id",
           name:"home-course-detail", 
           component: HomeCourseDetail
        },
        {
           id: 4,
           path:"/health-articles-page/:endpoint/:id",
           name:"health-articles-page",
           component: healthArticlesPage
        },
        {
           id: 5, 
           path:"/food-everyday/:endpoint/:id",
           name:"food-everyday", component: foodEveryday
        },
        {
          id: 6,
          path:"/food-everyday-detail/:endpoint/:price/:id",
          name: "food-everyday-detail",
          component: foodEveryDayDetail
        },
        {
            id: 7, path: "/Cart", 
            name: "Cart", 
            component: Cart
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
