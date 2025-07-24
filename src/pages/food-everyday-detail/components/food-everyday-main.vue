

<template>
    <div class="mt-10 font-mono bg-white p-6 rounded-lg max-w-[55em] shadow-2xl" v-if="listData"  >
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
                                <div> {{ listData.describe.content1 }}   </div>
                                          
                                <Alert 
                                     v-if="alert"
                                     nameIcon="success" 
                                     title="Thành công" 
                                     text="Đã thêm món ăn thành công!" 
                                    />
                               </div> 
                        </div>  
                      </div>  
                 </div>
        </div>
                           
                             
           <div class="flex gap-6 p-4 shadow-2xl rounded-lg max-w-[20em] justify-center relative left-[60%]"> 
                     <div class="flex">
                                 <div class=" grid gap-4">
                                      <div class="grid gap-4">  
                                          <h2 class="bg-black text-white p-2 font-bold font-mono"> Chọn hình thức học: </h2>
                                        <select 
                                          name="" id="" 
                                          v-model="choose" 
                                          class="
                                            text-center font-bold
                                            w-full border border-gray-400 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
                                        
                                          >
                                              <option value="default">Chọn 1 tùy chọn </option>
                                              <option value="workShop">  Work shop  </option>
                                              <option value="practice"> Thưc hành </option>
                                              </select>
                                        </div>
                                        <h1 class="font-bold text-red-500 font-mono"> Giá : {{ formattedPrice  }}  vnđ </h1>
                                <div>
                    <div 
                      v-if="choose == 'workShop' || choose == 'practice'"
                      class="  flex items-center gap-6 bg-white font-bold rounded-xl ">
                         <button   
                              @click="quantity > 1 ? quantity-- : null"
                              class="inline-block 
                                    px-4 py-1 hover:bg-slate-200
                                     text-2xl  rounded-xl border border-black
                                    "
                             
                             >  --   
                          </button>

                         <div class="px-4 py-2 bg-yellow-500 font-bold"> {{ quantity }} </div>
                             <button   
                               @click="quantity++"
                                class="inline-block 
                                    px-4 py-1 hover:bg-slate-200
                                     text-2xl  rounded-xl border border-black
                                "
                              
                              
                               >
                                +
                             </button>
                         </div>
                </div>


                    <div 
                       @click="choose !== 'default' ? handleRegister() : null"
                       :class="[
                           'inline-block px-4 py-2 rounded-sm font-mono font-bold text-center',
                           choose !== 'default' ? 'bg-orange-900 text-white cursor-pointer' :
                           'bg-gray-400 text-gray-300 cursor-not-allowed'
                        ]">
                              MUA KHÓA HỌC
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
import { computed, ref, watch } from 'vue';
const alert = ref(false);
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
const formattedPrice = computed(() => {
     if (!showPrice.value) {
          return '0'
     } 
  return showPrice.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})



const choose = ref("default");
const  [minPrice , maxPrice] = props.price.split(" - ");
const min =  computed(() => parseFloat(minPrice.replace(/\./g, "")) );
const max = computed(() =>  parseFloat(maxPrice.replace(/\./g, "")) ); 
const showPrice = ref(0);
const router = useRouter()

  const cart = cartStore();
const quantity = ref(1);


        watch(choose, () => {
              if(choose.value == "workShop"){
                    showPrice.value = min.value;
              }else if(choose.value == "practice") {
                   showPrice.value = max.value;
              }else {
                  showPrice.value = 0;
              }
        })
 

  
  setTimeout(() => {
    alert.value = false;
  }, 2000);
const formatNumber = (number) => {
      return number.toLocaleString('vi-VN');
};

  const handleRegister = () => {
    const priceFormatted = formatNumber(showPrice.value);
           const newItem = {
             id: props.listData.id,
            name: props.listData.name,
            price:priceFormatted, 
            img: props.listData.img,
           quantity: quantity.value
  };

               cart.addItem(newItem);
              alert.value = true;
              router.push("/Cart")

  }


      
</script>