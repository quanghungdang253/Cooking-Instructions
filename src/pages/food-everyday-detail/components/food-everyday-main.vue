

<template>
    <div class="mt-10 font-mono bg-white p-4 max-w-[40em]" v-if="listData"  >
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
                        <div class="flex items-center justify-between mt-6 relative">
                            <div> 
                              <h1 class="ml-4 font-bold text-[18px] text-red-500 font-mono">  Giá : {{ price }}  </h1> 
                                <div >
                                   {{ listData.describe.content1 }}
                              </div>
                                <Alert 
                                   v-if="alert"
                                   nameIcon="success" 
                                   title="Thành công" 
                                    text="Đã thêm món ăn thành công!" 
                                />

                          


                               </div> 
                               
                                </div>
                        <!-- <div class="flex items-end  gap-6 ml-6 bg-white shadow-2xl p-2 rounded-xl absolute bottom-0 right-[-1rem] ">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s" alt="" class="w-[2rem] h-[2rem]">
                              <img src="https://vudigital.co/wp-content/uploads/2021/12/icon-YouTube.png" alt="" class="w-[2rem] h-[2rem]">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/768px-Icon_of_Zalo.svg.png" alt="" class="w-[2rem] h-[2rem]">
                        </div> -->
                        </div>
                        
                 </div>
        </div>
            
                            <div class="flex flex-col  gap-6 max-w-[20em]"> 
                                  <div 
                                        @click="handleRegister"
                                        class="bg-orange-900 inline-block p-2 font-bold text-white text-center cursor-pointer"> ĐĂNG KÝ HỌC  
                                  </div>
                            
                                  <div 
                                    @click="handleAddCurser" 
                                    class="bg-orange-900 inline-block p-2 font-bold text-white   text-center flex items-center gap-2 cursor-pointer">
                                           <ShoppingCartIcon class="w-6" />
                                    THÊM KHÓA HỌC
 
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
            },
            price: {
              type: String,
              required: true
            }
        })
//    const Courser = {
//             name: props.listData.name,
//             price: props.listData.price,
//             img: props.listData.img
//     }
//   const handleRegister = () => {
//                cart.addItem(Courser);
     
//         router.push("/Cart")

//   }

//   const handleAddCurser = () => {
       
//         cart.addItem(Courser);
//         alert.value = true;
         
//   }
      
</script>