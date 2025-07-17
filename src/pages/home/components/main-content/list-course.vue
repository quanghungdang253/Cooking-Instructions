
<template>
    <div class="">   
        <div>  
        
            <span class="
                      relative 
                          float-left h-10 leading-10
                              bg-[#6b3b20] text-white px-2 text-xl font-medium 
                      uppercase after:content-[''] after:absolute after:top-0 
                     after:left-full after:border-[20px] after:border-transparent
                             after:border-l-[#6b3b20] after:border-b-[#6b3b20]
                    ">
                {{ title }}
         </span>  
      </div>



     </div>
         <div class="max-w-full h-1 content-[''] bg-red-900 mt-10 " > </div>
             <div class=" flex gap-4 p-4  overflow-x-auto bg-slate-400 ">
                <router-link to="/" v-for="(item , index) in data" :key="index" class="text-center bg-white min-w-[20em] flex flex-col items-center cursor-pointer hover:translate-y-[-5px] duration-300">
                    <img :src="item.img"  :alt="item.name" class="w-full h-[155px] object-contain p-2">
                    <h1 class=" p-2 font-bold text-[20px] font-mono"> {{ item.name }}</h1>
                    <span class="font-bold text-red-600 font-mono "> Giá : {{ item.price }} vnđ</span>
                    <h1 class="px-6 py-2 rounded-sm font-bold inline-block bg-amber-700 text-white my-8"> MUA KHÓA HỌC </h1>
                </router-link>
            </div>
</template>


<script setup>
        import { defineProps, onMounted, ref, watch } from 'vue';

        import useCourseHome from '../../../../hooks/use-show-course/use-course-home';
    
        const url = defineProps({
            nameUrl : {
                type: String,
                required: true
            },
            title : {
                type: String,
                required: true
            }
        })
       
       
        const {data} = useCourseHome(url.nameUrl);
        const title = url.title;
        watch(data, (newData) => {
            console.log("dữ liệu đã tải xong " , newData);
        })
        

onMounted(() => {
        console.log(" Component đã mounted!");
});

</script>