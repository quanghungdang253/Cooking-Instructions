

<template>
    <div class="mt-10 font-mono" v-if="listData" >
        <div class="flex gap-10">
                <img :src="listData.img" alt="" class="max-w-[25em]">
                 <div class="text-start">
                     <h1 class="font-bold text-[22px]"> {{ listData.name }} </h1>
                        <div class="flex mt-2">
                            <StarIcon class="max-w-[1.5em] text-orange-500" />
                               <StarIcon  class="max-w-[1.5em] text-orange-500" />
                               <StarIcon class="max-w-[1.5em] text-orange-500"  />
                               <StarIcon  class="max-w-[1.5em] text-orange-500" />
                                <StarIcon class="max-w-[1.5em] text-orange-500"  />
                            <div class="w-[22em]">( Đánh giá từ khách hàng ) </div>
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <div> 
                              <h1 class="ml-4 font-bold text-[18px] text-red-500 font-mono">  Giá : {{ listData.price }}  </h1> 
                              <div class="flex flex-col  gap-6"> 
                                      <router-link class="bg-orange-900 inline-block p-2 font-bold text-white text-center"> ĐĂNG KÝ HỌC   </router-link>
                                 <!-- <router-link 
                                            to="/Cart"
                                       
                                         
                                         >
                                         <div @click="handleAddCurser"  class="
                                        bg-orange-900 
                                        inline-block p-2 font-bold
                                         text-white text-center
                                         flex items-center gap-2

                                         " >   
                                          
                                         <ShoppingCartIcon class="w-6"
                                         
                                         />
                                        THÊM KHÓA HỌC 
                                        </div>
                                  </router-link> -->
 <div @click="handleAddCurser" class="bg-orange-900 inline-block p-2 font-bold text-white   text-center flex items-center gap-2 cursor-pointer">
    <ShoppingCartIcon class="w-6" />
  THÊM KHÓA HỌC
 

</div>
 <Alert 
    v-if="alert"
    nameIcon="success" 
    title="Thành công" 
    text="Đã thêm món ăn thành công!" 
  />


                               </div> 
                                </div>
                        <div class="flex items-center gap-6 ml-6 bg-white shadow-2xl p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.466 19.266h6.716l-6.716 10.137h6.716" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m41.517 4.502l-29.011.035c-8.624 7.4-11.224 17.418-3.53 31.911c.488 1.708-.359 3.42-2 5.129a11.17 11.17 0 0 0 6.864-1.266c13.983 6.27 21.919 2.18 29.644-2.733l.035-31.074a2 2 0 0 0-1.997-2.002z" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.63 26.791c0 1.443-1.22 2.612-2.724 2.612s-2.724-1.17-2.724-2.612v-1.698c0-1.442 1.22-2.612 2.724-2.612s2.724 1.17 2.724 2.612m9.13-2.61a2.714 2.714 0 0 1 2.714 2.714v1.494a2.714 2.714 0 0 1-2.713 2.714h0a2.714 2.714 0 0 1-2.714-2.714v-1.494a2.714 2.714 0 0 1 2.714-2.714m-9.131 6.92v-6.921m2.681-3.527v9.143c0 .722.585 1.307 1.306 1.307h.392" stroke-width="1"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 290"><path fill="#ff004f" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"/><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"/><path fill="#00f2ea" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"/></svg>
                        </div>
                        </div>
                        
                 </div>
        </div>
    </div>

</template>

<script setup>
  import { HandRaisedIcon, StarIcon, ChartBarIcon } from '@heroicons/vue/24/solid';
  import cartStore from '../../../store/store';
  import Alert from '../../../ui/alert.vue';
  import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
import { ref } from 'vue';
const alert = ref(false);
const router = useRouter()

  const cart = cartStore();
  const props = defineProps({
            listData: {
                type: Object,
                required: true
            }
        })

  const handleAddCurser = () => {
        const Courser = {
            name: props.listData.name,
            price: props.listData.price,
            img: props.listData.img
        }
        cart.addItem(Courser);
        alert.value = true;
         
  }
      
</script>