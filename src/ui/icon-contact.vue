<!-- 
<template>
    <div>
        <div>
            <img :src="imgFacebook" alt="">
        </div>
        <div>
              <img :src="imgYoutube" alt="">
        </div>
    </div>


</template>


<script setup>
        import imgFacebook from '../assets/img/facebook.png';
          import imgYoutube from '../assets/img/youtube.png';
      
</script> -->

<template>
    <div class="bg-yellow-400 p-4 rounded-[999px] shadow-2xl border border-black"> 
  <div class="
    w-8 h-8 overflow-hidden relative  ">
    <transition name="slide-fade" mode="out-in">
      <img
            :src="currentImg"
            :key="currentImg"
                alt=""
        class="w-full h-full object-cover"
      />
    </transition>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount,computed } from 'vue';
import imgFacebook from '../assets/img/facebook.png';
import imgYoutube from '../assets/img/youtube.png';

let facebook = "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png";
let youtube = "https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png";
const icons = [imgFacebook,imgYoutube];
const currentIndex = ref(0);

const currentImg = computed(() => icons[currentIndex.value]);

let intervalId = null;

        onMounted(() => {
  intervalId = setInterval(() => {
            currentIndex.value = (currentIndex.value + 1) % icons.length;
  }, 2000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
