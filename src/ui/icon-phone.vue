<template>
    <div
         class="flex gap-4 py-1 px-4 rounded-3xl bg-white shadow-2xl items-center cursor-pointer"
            @mouseleave="handleClosePhone"
            @mouseenter="handleOpenPhone"
         
    >
        
        <img :src="imgPhone" alt="" class="w-10 animate-shake-fast">
        <transition name="fade-slide"> 
        <h1 
            v-if="phone"
            class="text-red-500 font-bold transition-transform duration-3 transform font-mono"
         
        > 0388985737
    </h1>
    </transition>
    </div>
    


</template>



<script setup>
      import { ref } from 'vue';
import imgPhone from '../assets/img/phone.png';

      const phone = ref(false);
      const handleClosePhone = () => {
            phone.value = false;
      }
      const handleOpenPhone = () => {
            phone.value = true;
      }
     const timeOpen =   setInterval(() => {
            handleOpenPhone(); 
      },2000)
      const timeClose =   setInterval(() => {
            handleClosePhone(); 
      },4000)

      clearInterval(() => {
            timeClose,
            timeOpen
      })

</script>

<style scoped>
    @keyframes shake {
          0% { transform: rotate(0deg); }
         25% { transform: rotate(10deg); }
        50% { transform: rotate(-10deg); }
         75% { transform: rotate(10deg); }
        100% { transform: rotate(0deg); }   
    }
    
.animate-shake-fast {
  animation: shake 0.5s infinite;
}


.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

    .fade-slide-enter-from,
.fade-slide-leave-to {
         opacity: 0;
         transform: translateX(10px);
}
</style>