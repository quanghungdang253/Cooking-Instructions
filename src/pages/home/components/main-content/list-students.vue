


<template>
    <div class="bg-stone-300 mt-10">
        <div class="max-w-[1280px] mx-auto p-6"> 
              <h1 class="ml-4 mb-4 font-bold bg-[#6b3b20] text-white inline-block p-2"> HÌNH ẢNH THỰC TẾ </h1>
          <div class="flex justify-around">  
                <img 
                    v-for="(item,index) in listImg" 
                    :key="index"
                    :src="item"
                    :alt="item"
                    @click="openImg(index)
                    
                "
                class="cursor-pointer hover:translate-y-[-5px] duration-300"
              >
            </div>
            <div v-if="indexImg !== null" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 transition-transform " >  
                     <div class="relative  ">
                        <transition name="fade-slide" mode="out-in" > 
                            <img 
                                :src="listImg[indexImg]" 
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
       
import { XMarkIcon } from '@heroicons/vue/24/solid'
const listImg = ref([students1,students2,students3,students4]);
const indexImg = ref(null);


const openImg = (index) => {
        indexImg.value = index;
}
const clodeImg = () => {
        indexImg.value = null;
}
const rightImg = () => {
        indexImg.value = (indexImg.value + 1) % listImg.value.length
}
const leftImg = () => {
        indexImg.value = (indexImg.value == 0 ? listImg.value.length - 1 : indexImg.value - 1);
        
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