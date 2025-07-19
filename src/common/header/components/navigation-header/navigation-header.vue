

    <template>
<div>  
<div  @mouseleave="handleOpen  = false " class="relative">
  <div  class="bg-orange-900">  
    <div class="max-w-[1280px] mx-auto"> 
        <div class="flex justify-between  text-white"> 
            <div class="flex gap-10"> 
                         <div   v-for="(item,index) in listData" :key="index" class="flex items-center"> 
                             <router-link 
                              to="/"
                              v-if="index == 0"
                              class="cursor-pointer pl-4 pr-2 py-4 font-bold font-mono text-[14px]"> 
                              {{ item.name }}
                            </router-link>
                             <h1 
                                 v-if="index !== 0"
                                 @mouseover="handleOpen = index"
                              
                                 class="cursor-pointer pl-4 pr-2 py-4 font-bold font-mono text-[14px]"
                               > {{ item.name }}
                                 </h1>

                                 <span v-if="index == 1 || index == 2 || index == 4"> &#9660</span>
                        </div>
                        </div>  
                        <div class="flex gap-10">
                            <router-link 
                              class=" py-2 px-4 rounded-md font-bold flex items-center"> Đăng Nhập  </router-link>
                            <router-link  class=" py-2 px-4  rounded-md font-bold  flex items-center"> Đăng Ký  </router-link>
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
 
  class="cursor-pointer pl-4 pr-2 py-4 font-bold font-mono text-[14px]"
>
                          <h1
                            class="cursor-pointer hover:bg-yellow-600 text-center font-mono  font-bold inline-block p-2 hover:transition-transform hover: duration-700"
                             @click="handleNavigation(itemChild.endpoint, itemChild.id)"
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

        const router = useRouter();
        const handleNavigation = (endpoint, id) => {
            router.push({
              name: 'home-course-detail',
              params: {
               endpoint,
                 id
             }
            })
        }
        
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
