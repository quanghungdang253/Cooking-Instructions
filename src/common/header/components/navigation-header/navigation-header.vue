

    <template>
<div @mouseleave="handleOpen = null">
  <div  class="bg-orange-900">  
    <div class="max-w-[1280px] mx-auto"> 
        <div class="flex justify-between  text-white"> 
            <div class="flex gap-10"> 
                         <div  div   v-for="(item,index) in listData" :key="index" class="flex items-center"> 
                    
                             <h1 
                                 @mouseover="handleOpen = index"
                                 class="cursor-pointer pl-4 pr-2 py-4 font-bold font-mono text-[14px]"
                               > {{ item.name }}
                                 </h1>

                                 <span v-if="index == 1 || index == 2 || index == 4"> &#9660</span>
                        </div>
                        </div>  
                        <div class="flex gap-10">
                            <router-link class="bg-blue-600 py-2 px-4 rounded-md font-bold flex items-center"> Đăng Nhập  </router-link>
                            <router-link  class="bg-blue-600 py-2 px-4  rounded-md font-bold  flex items-center"> Đăng Ký  </router-link>
                         </div>
             </div>
         </div>
    </div>
  
        <div class="max-w-[1280px] mx-auto">  
             <div v-for="(item,index) in listData" :key="index" class="mt-4  bg-white">
                 <div v-if="handleOpen == index" class="grid grid-cols-3 gap-4" @mouseover="handleOpen = index">
                    <div v-for="(itemChild , index) in item.data" :key="index">
                          <h1 class="cursor-pointer hover:bg-yellow-600 text-center font-serif text-start p-1 font-bold"> > {{ itemChild.name }}</h1>
                          <hr>
                     </div>
                 </div>
             </div>
        </div>
  
 </div>
    </template>


    <script setup>
        import { ref } from 'vue';
        import listData from './components/handle-data';
        let handleOpen = ref(null);
        
    </script> 

