

<template>
    <div class=""> 
        <div v-if="data" class="grid  gap-6 grid-cols-[1fr_1fr_1fr_1fr]">
             <router-link 
                 :to="{
                        name: 'home-course-detail',
                        params: {
                        endpoint: item.endpoint,
                        id: item.id
                 }}"
                v-for="(item,index) in data" 
               :key="index"
               class="max-w-[20em] min-h-[30em] inline-block bg-slate-900 flex flex-col items-center relative"
            >
                <div class="text-center grid gap-2">  
                    <img :src="item.img" alt="max-w-[100%] h-[100%]" >
                    <h1 class="text-yellow-500 font-bold font-mono text-xl"> {{ item.name }}</h1>
                    <p class="text-white font-sans font-bold p-4"> {{ item.description }}</p>
               </div> 
                <button class="bg-red-700 text-white font-bold p-4 absolute bottom-2 rounded-xl font-mono"> ĐĂNG KÝ HOC NGAY </button>
             </router-link>
        </div>
 </div>
</template>

<script setup>
      import useCourseHome from '../../../hooks/use-show-course/use-course-home';
import { onMounted, watch } from 'vue';

      const {data} = useCourseHome("/data/data-study-program/data-study-program.json");

    watch(data, (newData) => {
            console.log("dữ liệu đã tải xong "+ newData);
    })

</script>