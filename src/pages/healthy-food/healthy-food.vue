<template>
       <div class="
        h-[5000px] bg-[url('https://cdn.justfly.vn/400x300/media/c9/ce/22d6-c9e1-47fd-9cf2-6ae504b5344d.jpg')]
        "
        v-if="getData"
        >
     
         <header class="bg-black opacity-60 p-10 text-center relative">
                </header>
                 <h1 class="
                    text-xl
                  text-white
                    font-bold
                    absolute
                    top-[1.5rem] left-[40%] 
                 "
                 >
                         {{ getData.topicName }} 
                 </h1>

          <div class="max-w-[1280px] mx-auto "> 
            <div v-if="getData" class="flex items-start justify-between gap-4">  

                    <listHealthy :getData="getData" />
                  <div class="p-4 bg-white flex flex-col items-center"> 
                     <sideBar :listData="getData" />
                     <homeSideBar :listData="getData"/>
                   </div>
             </div>
           </div>
       </div> 


</template>


<script setup>
import useHealthyFood from '@/hooks/use-healthy-food/use-healthy-food';
import listHealthy from './components/list-healthy.vue';
import { useRoute } from 'vue-router';
import sideBar from '@/components/side-bar.vue';
import homeSideBar from '@/components/home-side-bar.vue';
import { computed, onMounted, ref, watch, watchEffect } from 'vue';    
      const router = useRoute();
      
        const endpoint = computed(() => router.params.endpoint);
        const getData = ref(null);
        const url  = computed(() => {
            return `/data/data-healthy-food/${endpoint.value || 'data-healthy-food'}.json`
        });
        const {listData, handleGetData} = useHealthyFood(url);
    

        console.log(listData);
      
   
        onMounted(() => {
                handleGetData();
                 
        });
    
        // watch(endpoint, (newData) => {
        //       getData.value  = listData.value;
             
        //      console.log("dữ liệu có thay đổi " + newData);
        // })
        watchEffect(() => {
                  getData.value = listData.value;
        });


</script>