


<template>
    <div class="bg-amber-400 mt-10">
        <div class="max-w-[1280px] mx-auto p-6"> 
              <!-- <h1 class=" mb-4 font-bold bg-[#6b3b20] text-white inline-block p-2"> {{ title }} </h1> -->
               <Title :content="title" />
          <div class="flex justify-around gap-4 mt-4">  
                <img 
                    v-for="(item,index) in props.listImg" 
                    :key="index"
                    :src="item"
                    :alt="item"
                    @click="openImg(index)
                    
                "
                class="cursor-pointer hover:translate-y-[-5px] duration-300 min-w-[280px]"
              >
            </div>
            <div v-if="indexImg !== null" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 transition-transform " >  
                     <div class="relative  ">
                        <transition name="fade-slide" mode="out-in" > 
                            <img 
                                :src="props.listImg[indexImg]" 
                                 alt="" 
                                 class="w-[35em] transition duration-500  transform  scale-105 "
                                 :key="indexImg"

                            >
                         </transition>
                      </div>
                      <div>
                            <div class="absolute top-1/2 left-4 text-white text-3xl cursor-pointer" @click="leftImg"> ⟨ </div>
                            <div class="absolute top-1/2 right-4 text-white text-3xl cursor-pointer" @click="rightImg"> ⟩ </div>
                      </div>
                      
                             <button class="absolute top-6 right-6" @click="clodeImg">   <XMarkIcon class="w-6 h-6 text-white cursor-pointer" /> </button>
                     
               
                           
            <

             </div>
         </div>
    </div>


</template>


<script setup>
import { ref } from 'vue';
import Title from './title.vue';
 const props =  defineProps({
    listImg: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
      
import { XMarkIcon } from '@heroicons/vue/24/solid'


const indexImg = ref(null);


const openImg = (index) => {
        indexImg.value = index;
}
const clodeImg = () => {
        indexImg.value = null;
}
const rightImg = () => {
        indexImg.value = (indexImg.value + 1) % props.listImg.length
}
const leftImg = () => {
        indexImg.value = (indexImg.value == 0 ? props.listImg.length - 1 : indexImg.value - 1);
        
}
</script>

<style>

 .fade-slide-enter-active, 
.fade-slide-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.95); /* trượt vào và thu nhỏ */
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(0.95); /* trượt ra và thu nhỏ */
}

.transition-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Đảm bảo hình đẹp */
}

</style>