

<template>

  <div class="max-w-[850px]">   
    <div class="font-mono bg-white  rounded-lg shadow-2xl" v-if="listData"  >
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
                              <h1 class="ml-4 font-bold text-[18px] text-red-500 font-mono">  Giá : {{ listData?.description?.workshop_price }} - {{ listData?.description?.practice_price }} </h1> 
                                <div> 
                                    Khóa học được thiết kế theo phương pháp kết hợp giữa lý thuyết và thực hành, giúp học viên nắm vững kiến thức về nguyên liệu, kỹ thuật chế biến và trực tiếp thực hành nấu ăn để nâng cao kỹ năng.
                                
                                </div>
                                          
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
                           
                             
          
                      <div class=" grid gap-4 max-w-[400px] ml-auto bg-yellow-400 shadow-sm p-2">
                                      <div class="flex">  
                                          <h2 class="bg-black text-white p-2 font-bold font-mono text-center"> Chọn hình thức học </h2>
                                        <select 
                                          name="" id="" 
                                          v-model="choose" 
                                          class="
                                            text-center font-bold
                                            w-full border border-gray-400 p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
                                        
                                          >
                                              <option value="default">Chọn 1 tùy chọn </option>
                                              <option value="workShop">  Work shop  </option>
                                              <option value="practice"> Thực Hành  </option>
                                              </select>
                                              
                                        </div>
                                        <h1 
                                          v-if="choose == 'workShop' || choose == 'practice'"
                                           class="font-bold text-white bg-red-600 font-sans p-2 text-[16px] text-center inline-block"> 

                                          Giá : {{ formattedPrice}} vnđ 
                                        
                                        </h1>
                                <div>
                    <div 
                      v-if="choose == 'workShop' || choose == 'practice'"
                      class="  flex items-center gap-6 bg-white font-bold rounded-sm p-1 ">
                      Số Lượng 
                         <button   
                              @click="quantity > 1 ? quantity-- : null"
                              class="inline-block 
                                    p-4  hover:bg-slate-200
                                     text-2xl  rounded-sm border border-black
                                    "
                             
                             >  - 
                          </button>

                     <div class="px-4 py-2 bg-yellow-500 font-bold"> {{ quantity }} </div>
                             <button   
                               @click="quantity++"
                                class="inline-block   p-4  hover:bg-slate-200 text-2xl  rounded-sm border border-black"> 
                                +
                            </button>
                   </div>
                  </div>
                     <div 
                       @click="choose !== 'default' ? handleRegister() : handleAlert()"
                       :class="[
                           'inline-block px-4 py-2 rounded-sm font-mono font-bold text-center cursor-pointer',
                           choose !== 'default' ? 'bg-orange-900 text-white' :
                           'bg-white text-black'
                        ]">
                              MUA KHÓA HỌC
                    </div>

                             <div v-if="varibleAlert">
                             <Alert 
                                   
                                     nameIcon="error" 
                                     title="Vui lòng chọn 1 tùy chọn" 
                                     text="Đã thêm món ăn thành công!" 
                                    />
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



const showPrice = ref(0);
const router = useRouter()
const priceString = props.price || "0";
const choose = ref("default");
const varibleAlert = ref(false);
// const  [minPrice , maxPrice] = props.price.split(" - ");



const [minPrice, maxPrice] = priceString.includes(" - ")
  ? priceString.split(" - ")
  : [priceString, priceString];


function handleAlert() {
    varibleAlert.value = true;
}




  const cart = cartStore();
const quantity = ref(1);
const min = computed(() =>
  parseFloat(props.listData?.description?.workshop_price.replace(/\./g, ""))
)

const max = computed(() =>
  parseFloat(props.listData?.description?.practice_price.replace(/\./g, ""))
)
        watch(choose, () => {
              if(choose.value == "workShop"){
                    showPrice.value = min.value;
              }else if(choose.value == "practice") {
                   showPrice.value = max.value;
              }else {
                  showPrice.value = 0;
              }
        })
        const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
 
const formattedPrice = computed(() => {
     if (!showPrice.value) {
      
            //  return `${formatPrice(min.value)} - ${formatPrice(max.value)}`

            return 0;
     } 
  return showPrice.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})

  setTimeout(() => {
      alert.value = false;
     varibleAlert.value = false;

  }, 5000);
        const formatNumber = (number) => {
      return number.toLocaleString('vi-VN');
};

  const handleRegister = () => {
      varibleAlert.value = false; // cập nhật lại trạng thái thông báo 


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