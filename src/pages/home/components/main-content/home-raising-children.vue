
<template>
    <div class="relative inline-block mb-2 mt-4">
        <div>  
        
           <span
      class="relative z-10 block h-10 leading-10 px-4 bg-[#6b3b20] text-white text-xl font-medium uppercase"
    >
      {{ title }}
    </span>
    <span
      class="absolute top-0 left-full w-0 h-0 border-t-[20px] border-b-[20px] border-l-[20px] border-t-transparent border-b-transparent border-l-[#6b3b20]"
    ></span>
      </div>



     </div>
         <div class="max-w-full h-1 content-[''] bg-red-900 mt-0 " > </div>
         <div class="relative">  
             <div class=" flex gap-4 p-4  overflow-x-hidden bg-slate-400 relative  scroll-smooth" ref="containerScroll">
                <router-link
                     :to="{name: 'home-course-detail', params: {
                        endpoint: item.endpoint,
                        id: item.id
                        
                    }}" 
                     v-for="(item , index) in getData" 
                     :key="index" 
                    
    class="text-center bg-white min-w-[20em] flex flex-col items-center cursor-pointer hover:translate-y-[-5px] duration-300">
                                       
                 <div class="h-[275px]">   
                    <img :src="item.img"  :alt="item.name" class="w-full h-[155px] object-cover p-2">     
                    <h1 class=" p-2 font-bold text-[20px] font-mono"> {{ item.name }}</h1>
                 
                            <p>  {{ item.description }}  </p>
                    <span class="font-bold text-red-600 "> {{ item.content }} </span>
                
                 </div>    
                <h1 
                        class="px-6 py-2 rounded-sm font-bold 

                        inline-block bg-amber-700 text-white my-8">
                         XEM THÊM
                    
                     </h1>
                
                </router-link>
             
            </div>
                <div class="">
                        <button 
                            class="absolute z-20 left-0 bottom-44 bg-white p-2 font-bold"
                            @click="handleScrollLeft"
                        >
                             <ArrowLeftIcon class="w-6 font-bold" />
                        </button>
                        <button 
                            class="absolute z-20 right-0 bottom-44  bg-white p-2 font-bold"
                            @click="handleScrollRight"
                        > 
                            <ArrowRightIcon class="w-6" />
                        </button>
                </div>
            </div>
           
</template>


<script setup>
        import { computed, defineProps, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { ArrowDownLeftIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'
        import useCourseHome from '../../../../hooks/use-show-course/use-course-home';
     const containerScroll = ref(null);
     const widthScroll = 300;
     let time = ref(null);
       const url = defineProps({
            nameUrl : {
                type: String,
                required: true
            },
            title : {
                type: String,
                required: true
            },
            data : {
                type: Array,
                required: true
            },
             condition_name : {
                 type: String,
                 required: true
             }
            
        })

    //  const nameUrl = computed(() => url.nameUrl);
      


const getData = computed(() => {
  if (!Array.isArray(url.data)) return [];

  if(url.condition_name === "data-raising-childrent") {
          return url.data.filter(item => item.endpoint === "data-raising-children");
  }
 


});

       const handleScrollLeft = () => {
            containerScroll.value.scrollLeft -= widthScroll;
       }
       const handleScrollRight = () => {
                containerScroll.value.scrollLeft += widthScroll;
       }
       
      onMounted(() => {
            time = setInterval(() => {
                    handleScrollRight()
            },6000)
       })
       onBeforeUnmount(() => {
                clearInterval(time)
       })
        // const {data} = useCourseHome(nameUrl.value);
        // const title = url.title;
        // watch(data, nameUrl, (newData) => {
        //     console.log("dữ liệu đã tải xong " , newData);
        // })
        

onMounted(() => {
        console.log(" Component đã mounted!");
});

</script>