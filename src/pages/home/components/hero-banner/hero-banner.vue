

<template>
     <div class="relative  overflow-hidden h-[30em]">  
        <transition name="fade-slide">
           <div>    
                <img 
                    :src="listImg[index].img" 
                    alt="" 
                    :key="listImg[index].id"
                    class="w-full h-[30em] object-cover transition-img"
                    
               >
               <div class="absolute top-36 left-[30em]" v-if="index == 0 || index == 1"> 
                   <h1 class="font-bold text-4xl text-red-600"> {{ listImg[index].title}} </h1>
                    <p class="text-xl max-w-[25em] font-bold font-mono mt-6"> {{ listImg[index].content }} </p>
                    <button class="
                      inline-block p-4 rounded-xl
                      bg-white font-bold text-2xl
                      mt-10
                      "
                    > ĐĂNG KÝ HỌC NGAY </button>
                 </div>
            </div>
            
        </transition>
        <div class="">   
             <button  
              class="absolute top-48 bg-white"
              @click="handleLeft"
             > <ChevronLeftIcon class="w-10 font-bold text-black"/>
            
            </button> 
             <button  
              class="absolute top-48 right-0 bg-white"
              @click="handleRight"
              > 
                 <ChevronRightIcon  class="w-10" />
            </button>
         </div>
     </div>
</template>


<script setup>
        import { onMounted, onUnmounted, ref } from 'vue';
        import {
        ChevronUpIcon,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronRightIcon
} from '@heroicons/vue/24/solid'
        import img1 from '../../assets/image/banner-01.jpg';
        import img2 from '../../assets/image/banner-02.jpg';
        import img3 from '../../assets/image/banner-03.jpg';
        import img4 from '../../assets/image/banner-04.jpg';
        import img5 from '../../assets/image/banner-05.jpg';
     
         let listImgSale = [
            {
              id: 0, img: img1, title: "HỌC NẤU ĂN GIA ĐÌNH", content:"Dạy nấu ăn gia đình chuyên nghiệp với các khóa học bếp gia đình độc đáo như bữa sáng thông minh, món ngon đãi tiệc, vào bếp cuối tuần" 
            },
            {
              id: 1, img: img2, title: "HỌC NẤU ĂN GIA ĐÌNH", content:"Dạy nấu ăn gia đình chuyên nghiệp với các khóa học bếp gia đình độc đáo như bữa sáng thông minh, món ngon đãi tiệc, vào bếp cuối tuần" 
            },
            {
              id: 2, img: img3, title: "HỌC NẤU ĂN GIA ĐÌNH", content:"Dạy nấu ăn gia đình chuyên nghiệp với các khóa học bếp gia đình độc đáo như bữa sáng thông minh, món ngon đãi tiệc, vào bếp cuối tuần" 
            },
            {
              id: 3, img: img4, title: "HỌC NẤU ĂN GIA ĐÌNH", content:"Dạy nấu ăn gia đình chuyên nghiệp với các khóa học bếp gia đình độc đáo như bữa sáng thông minh, món ngon đãi tiệc, vào bếp cuối tuần" 
            },
            {
              id: 4, img: img5, title: "HỌC NẤU ĂN GIA ĐÌNH", content:"Dạy nấu ăn gia đình chuyên nghiệp với các khóa học bếp gia đình độc đáo như bữa sáng thông minh, món ngon đãi tiệc, vào bếp cuối tuần" 
            }
         ];
        const listImg = ref(listImgSale);
        const index = ref(0);
        let time = ref(null);
        function handleTime(){
                    time.value = setInterval(() => {
                    index.value = (index.value + 1) % listImg.value.length;
             }, 3000);
        }
      
   const handleLeft = () => {
          index.value = index.value < 0 ? listImg.value.length - 1 : index.value - 1;
   }
   const handleRight = () => {
          index.value = (index.value + 1) % listImg.value.length;
   }
   onMounted(() => {
        handleTime();
   })
   onUnmounted(() => {
        clearInterval(time.value)
   })
        
   
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