
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
                     v-for="(item , index) in data" 
                     :key="index" class="text-center bg-white min-w-[20em] flex flex-col items-center cursor-pointer hover:translate-y-[-5px] duration-300">
                    <img :src="item.img"  :alt="item.name" class="w-full h-[155px] object-contain p-2">
                    <h1 class=" p-2 font-bold text-[20px] font-mono"> {{ item.name }}</h1>
                    <span
                     v-if="item.endpoint !== 'data-raising-children'"
                        class="font-bold text-red-600 font-mono 
                        
                        "> Giá : {{ item.price }} vnđ</span>
                    <span 
                        v-else
                        class="font-bold text-red-600 ">  {{ item.content }}</span>
                    <h1 
                        class="px-6 py-2 rounded-sm font-bold 
                        
                        inline-block bg-amber-700 text-white my-8"
                        v-if="item.endpoint != 'data-raising-children'"
                        >
                         MUA KHÓA HỌC
                    
                     </h1>
                     <h1 class="px-6 py-2 rounded-sm font-bold 
                        
                        inline-block bg-amber-700 text-white my-8"
                        v-else
                        > XEM THÊM </h1>
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
            }
        })
     const nameUrl = computed(() => url.nameUrl);
      
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
        const {data} = useCourseHome(nameUrl.value);
        const title = url.title;
        watch(data, nameUrl, (newData) => {
            console.log("dữ liệu đã tải xong " , newData);
        })
        

onMounted(() => {
        console.log(" Component đã mounted!");
});

</script>