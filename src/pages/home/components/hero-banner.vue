

<template>
        <div>
                <img :src="listImg[index]" alt="">
        </div>

</template>


<script setup>
        import { onMounted, ref } from 'vue';
import img1 from '../assets/image/banner-01.jpg';
        import img2 from '../assets/image/banner-02.jpg';
        const listImg = ref[(img1,img2)];
        const index = ref(0);
let time = ref(null);
        function handleTime(){
              time = setInterval(() => {
                    index.value++
             }, 2000);
        }
      
   
   onMounted(() => {
        handleTime();
   })
        
   
</script>