
   import { createRouter , createWebHistory } from 'vue-router'
        import Cart from '../pages/cart/cart.vue';
        import Login from '@/pages/auth/login.vue';
    import Home from '../pages/home/home.vue';
    import About from '../pages/about/about.vue';
    import HomeCourseDetail from "../pages/home-course-detail/home-course-detail.vue";
    import familyCookingCourse from "@/pages/family-cooking-course/family-cooking-course.vue";
    import healthArticlesPage from '@/pages/health-articles-page/health-articles-page.vue';
    import foodEveryday from '@/pages/food-everyday/food-everyday.vue';
    import healthyFood from '@/pages/healthy-food/healthy-food.vue';
    import foodEveryDayDetail from '@/pages/food-everyday-detail/food-everyday-detail.vue';
    import healthyFoodDetail from '@/pages/healthy-food-detail/healthy-food-detail.vue';
    import { useUser } from '@/hooks/useInfoUser';
    import lookUpOrders from '@/pages/look-up-orders/look-up-orders.vue';
    import register from '@/pages/auth/register.vue';
import { comment } from 'postcss';

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
           path: "/food-detail/:id",
           name:"food-detail", 
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
           path:"/food-everyday/:endpoint",
           name:"food-everyday", 
           component: foodEveryday
        },
        {
          id: 6,
          path:"/food-everyday-detail/:id",
          name: "food-everyday-detail",
          component: foodEveryDayDetail
        },
        {
            id: 7, 
            path: "/Cart", 
            name: "Cart", 
            component: Cart
        },
        {
            id: 8,
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            id: 9,
            path: "/Healthy-food",
            name: "Healthy-food",
            component: healthyFood
        },
        {
            id: 10,
            path: "/Healthy-food-detail/:endpoint/:id",
            name: "healthy-food-detail",
            component: healthyFoodDetail
        },
        
         {
            id: 11,
            path: "/Healthy-food/:endpoint/:id",
            name: "Healthy-food-list",
            component: healthyFood
        },
        {
            id: 12, 
            path: "/register",
            component: register
        },
         {
              id: 13,
              path: "/admin",
              name: "AdminDashboard",
              component: () => import('@/pages/admin/admin.vue'),
              meta: { requiresAuth: true, role: 'admin' }  
          },
  {
    id: 14,
    path: "/user",
    name: "UserHome",
    component: () => import('@/pages/home/home.vue'),
    meta: { requiresAuth: true, role: 'user' }  
  },
  
 {
    id: 15,
    path: '/search-course',
    name: 'SearchCourse',
    component: lookUpOrders
  },
  
 

         {
             path: "/:pathMatch(.*)*",
             redirect: "/"  // Hoặc có thể trỏ đến component 404
        }



    ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {

  const { user } = useUser()
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth) {

    if (!token || !user.value) {
      return next('/login')
    }

    if (to.meta.role && user.value.role !== to.meta.role) {
      return next('/')
    }

  }

  next()
})


    export default router;
