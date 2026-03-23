



    <template>
<div>  
<div  @mouseleave="handleOpen  = false " class="relative">
  <div  class="bg-orange-900">  
    <div class="max-w-[1280px] mx-auto"> 
        <div class="flex justify-between  text-white"> 
            <div class="flex gap-10"> 
                         <div   v-for="(item,index) in listData" :key="index" class="flex items-center"> 
                             <router-link 
                              :to="
                                index == 0 ? '/' : 
                                index == 3  ? '/Healthy-food' :
                                index == 4 ? {name: 'Healthy-food-list', params: {
                                  endpoint: item.endpoint
                                }} : ''"
                             
                              v-if="index == 0 || index == 3"
                              class="
                          
                              cursor-pointer pl-4
                              pr-2 py-4 font-bold
                              font-mono text-[14px]
                              hover:text-yellow-500
                            "> 
                              {{ item.name }}
                            </router-link>
                             <h1 
                                 v-if="index !== 0 && index !== 3"
                                 @mouseover="handleOpen = index"
                              
                                 class="
                                 hover:text-yellow-500
                                 cursor-pointer pl-4 pr-2 py-4 font-bold font-mono text-[14px]
                                   
                                 "
                               > {{ item.name }}
                                </h1>

                                 <span 
                                 class="hover:text-yellow-500"
                                 v-if="index == 1 || index == 2 || index == 4" >
                                   &#9660
                                  </span>
                        </div>
                        </div>  
                        <div class="flex items-center">
                           <router-link 
                            to="/search-course"
                              class=" 
                                py-2 px-4 rounded-md font-bold flex items-center       hover:text-yellow-500">
                                 
                                 Tra cứu khóa học
                            </router-link>
                        </div>

                          <div v-if="user" class="flex items-center">
                              <div @click="handleLogicBtn" class="cursor-pointer">   
                                 <img :src="user.avatar" class="w-8 h-8 rounded-full inline" />
                                 <span class="ml-2">{{ user.name }}</span>
                              </div>
                                <transition name="fade-slide">     
                                 <div    
                                     v-show="user && logicBtn" >
                                    <button  @click="logout" class="ml-4 bg-red-500 px-2 rounded"> 
                                               Đăng Xuất 
                                    </button>
                                  </div>
                                </transition>



                              </div>
                              











                              
                        <div class="flex gap-10 font-mono" v-else>                                 
                            <router-link 
                             to="/Login"
                            
                            class=" py-2 px-4  rounded-md font-bold flex items-center hover:text-yellow-500" > Đăng Nhập  </router-link>

                         </div>
                         

                      
                        
             </div>
             
         </div>
    </div>


    <div class="absolute top-full w-full left-0 right-0  shadow-lg z-50 ">   
        <div class="max-w-[1280px] mx-auto">  
           
                <transition name="fade-slide" mode="out-in">  
                 <div  
                    v-if="handleOpen !== null && listData[handleOpen]?.data.length " 
                    class="grid grid-cols-3  bg-white" 
                >
                    <div v-for="(itemChild , index) in listData[handleOpen].data"  class=" text-center"
                     :key="index" 
                     
                    
                    
                    >
                      <div
  @click="handleNavigation(itemChild.endpoint, itemChild.id)"
  class="cursor-pointer pl-4 pr-2 py-2 font-bold font-mono text-[14px] hover:bg-yellow-600"
>
                          <h1
                            class="cursor-pointer  text-center font-mono  font-bold inline-block  hover:transition-transform hover: duration-700"
                            
                            >  {{ itemChild.name }}
                          </h1>
                      </div>
                          <hr>
                     </div>
                 </div>
                 </transition>
             
        </div>
  </div>
 </div>
  </div>
    </template>

  <script setup>
        import { ref } from 'vue';
        import { useRouter } from 'vue-router';
        import listData from './components/handle-data';
        let handleOpen = ref(null);
        import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
        import { DocumentMagnifyingGlassIcon } from '@heroicons/vue/24/outline'
        import listEndpoint from './components/list-endpoint';
        import { useUser } from '@/hooks/useInfoUser';


        const router = useRouter();



        const logicBtn  = ref(false);


        function handleLogicBtn() {
       
             router.push("/admin")
        }

const logout = () => {
  clearUser()
  localStorage.removeItem('token')
  router.push('/login')
}

const { user, clearUser } = useUser()

        const listNameRouter = ["data-eat-where","data-secret","data-tips","data-child-rearing"];

        
        const handleNavigation = (endpoint, id) => {
     
      
          // thực hiện gửi và file router.js
            router.push({
              name: "food-everyday",
              params: {
               endpoint,
                 id
             }
            })
        }
           
const clickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
};

defineExpose({ clickOutside });





    </script> 

<style scoped>
.fade-slide-enter-active, 
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
     opacity: 0;
     transform: translateX(20px); 
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style> 

