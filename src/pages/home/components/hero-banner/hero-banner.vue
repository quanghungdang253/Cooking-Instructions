

<template>
     <div class="relative  overflow-hidden h-[30em]">  
        <transition name="fade-slide">
                <img 
                    :src="listImg[index]" 
                    alt="" 
                    :key="listImg[index]"
                    class="w-full h-[30em] object-cover transition-img"
                    
               >
        </transition>
     </div>
</template>


<script setup>
        import { onMounted, onUnmounted, ref } from 'vue';
        import img3 from '../../assets/image/banner-03.jpg';
        import img4 from '../../assets/image/banner-04.jpg';
        import img5 from '../../assets/image/banner-05.jpg';
     
        const listImg = ref([img3,img4,img5]);
        const index = ref(0);
        let time = ref(null);
        function handleTime(){
                    time.value = setInterval(() => {
                    index.value = (index.value + 1) % listImg.value.length;
             }, 2000);
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