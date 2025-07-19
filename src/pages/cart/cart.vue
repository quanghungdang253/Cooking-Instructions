
<template>
    <div class="flex justify-center" v-if="cart.listItems.length > 0">
        <div> 
        <div>
                <h1 class="text-2xl font-bold text-center mt-4"> GIỎ HÀNG CỦA BẠN </h1>
        </div>
        <div class=" bg-orange-800 ">
            <div class="flex justify-between inline-block text-white p-2">
                <h1> SẢN PHẨM </h1>
                <h1> GIÁ </h1>
                <h1> TẠM TÍNH </h1>
            </div>
            <div v-if="cart.listItems.length > 0"  >
                <div v-for="(items,index) in cart.listItems" :key="index" class="shadow-2xl p-4 relative min-w-[56em]" >
                    <div class="flex justify-between">
                        <div class="flex gap-4">  
                            <img :src="items.img" alt="" class="max-w-[10em]">
                            <p class="font-semibold max-w-[6em] text-xl font-mono text-yellow-400">{{ items.name }}</p>
                        </div>
                     
                             <p class="text-white mr-52 font-bold">{{ items.price }} vnđ</p>
                             <p class="text-white font-bold">{{ items.price }} vnđ</p>
                    </div>
                <div>
                <button 
                             class="text-white font-bold bg-red-600 inline-block p-2 rounded-sm absolute bottom-0 right-0"
                             @click="cart.removeItem(index)"
                > X 
                            </button>
                            </div>
                        </div>
                     </div>
                </div>
         </div>
    </div>
    <div v-else>
        <div class="flex flex-col items-center mt-10">  
                  <h1 class="font-bold text-2xl"> GIỎ HÀNG CỦA BẠN ĐANG TRỐNG</h1>
                    <img src="https://megacare.vn/uploads/images/icons/empty-cart.webp" alt="">
          
             </div>
    </div>

</template>

<script setup>
        import { onMounted } from 'vue';
import cartStore from '../../store/store';

        const cart = cartStore();

        onMounted(() => {
            console.log("dữ liệu của giỏ hàng là " + cart.listItems);
        })
</script>