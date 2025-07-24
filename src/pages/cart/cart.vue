
<template>
    <div class="flex justify-center h-[3000px]" v-if="cart.listItems.length > 0">
     <div> 
        <div>
                <h1 class="text-2xl font-bold text-center mt-4"> GIỎ HÀNG CỦA BẠN </h1>
        </div>
        <div class=" bg-orange-800 relative">
            <div class="flex  justify-between  bg-yellow-500 text-black font-bold p-2">
                <h1> SẢN PHẨM </h1>
                <h1> GIÁ </h1>
                <h1> TẠM TÍNH </h1>
            </div>
            <div v-if="cart.listItems.length > 0" class="flex flex-col gap-10 relative " >
                <div v-for="(items,index) in cart.listItems" :key="index" class="shadow-2xl p-4 min-w-[56em]" >
                    <div class="flex  justify-between">
                        <div class="flex gap-4">  
                            <img :src="items.img" alt="" class="max-w-[7em]">
                            <p class="font-semibold max-w-[6em] text-xl font-mono text-yellow-400">{{ items.name }}</p>
                        </div>
                     
            <p class="text-white mr-52 font-bold"> {{ formatNumber( convertNumber(items.price) )}} vnđ</p>
            <p class="text-white font-bold">{{ formatNumber(convertNumber(items.price) * items.quantity)  }} vnđ </p>
             </div>
             <div class="flex justify-end gap-4 items-center">  
                    <div class="  
                        flex items-center
                        gap-6 bg-white 
                        font-bold  rounded-xl
                        inline-block
                    "
                    >   
                         <button   
                             @click="cart.decreaseQuantity(index)"
                              class="inline-block 
                              px-4 py-2 hover:bg-slate-200 text-xl  rounded-xl"
                             
                             > - 
                        </button>
                             <div class="px-4 py-2"> {{ items.quantity }} </div>
                         <button   
                           @click="cart.increaseQuantity(index)"
                            class="inline-block px-4 py-2 hover:bg-slate-200 text-xl  rounded-xl"> 
                                + 
                          </button>
                     </div>
                   
                <div>
                <button 
                    class="
                        text-white 
                          font-bold bg-black 
                          inline-block p-2 rounded-sm "
                          @click="cart.removeItem(index)"
                    >
                
                        <TrashIcon class="w-6 h-6 text-white hover:text-red-700" />
                 </button>
             </div>
        </div>
    </div>
</div>                       
    </div>


         <div 
          v-if="cart.listItems.length > 0" 
          class="flex justify-between mt-10">

      
        <div class="border border-black min-w-[25em] p-2">
            <div>
                <h1 class="bg-stone-900 text-white text-center p-2 font-bold"> THÔNG TIN KHÓA HỌC</h1>
                <div class="mt-2 h-2 bg-black"></div>
                <div class=" border border-black p-2">
                    <div class="flex justify-between p-2 text-red-500 font-bold font-mono">
                        <h1> SẢN PHẨM</h1>
                        <h1> TẠM TÍNH </h1>
                    </div>
                    <hr>
                    <div 
                        v-for="(item , index) in cart.listItems "   
                        :key="index"
                      
                    >
                    <div   class="flex justify-between p-2 font-bold">  
                        <h1 >{{ item.name }}</h1>
                        <h1 class="text-red-500 font-bold">{{   item.price  }} vnđ</h1>  
                    </div>
                          
                      </div>
                      <div   class="flex justify-between p-2 font-bold">  
                             <h1> TẠM TÍNH </h1>
                         <h1 class="text-red-500 font-bold">    {{ formatNumber(totalPrice()) }} vnđ </h1>  
                         </div>
                    </div>
                </div>
                               <div>
     <button
       @click="goToForm"
        class="
         bg-green-600
         text-white
           px-6 py-3 
           font-bold rounded-xl
           hover:bg-green-700 transition">   
           THANH TOÁN
      </button>
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
        import { TrashIcon } from '@heroicons/vue/24/outline' 
        import cartStore from '../../store/store';
        import FormInput from './components/form-input.vue';


        
        const cart = cartStore();
const convertNumber = (price) => {
  if(!price) {
      return 0;
  }else {
    return parseFloat(price.toString().replace(/\./g, ''));
  }

}

const goToForm = () => {
    const cartData = cart.listItems;
    if(cartData.length === 0) {
        alert("giỏ hàng đang trống");
        return;
    }

const encodedCart = encodeURIComponent(JSON.stringify(cartData));
   window.open(
      `https://quanghung.kesug.com/form-input.html?cart=${encodedCart}`,
      '_blank',
      'width=400,height=1000,left=800 top=900 text-center flex-col items-center'
    );
}

const totalPrice = () => {
    return cart.listItems.reduce((sum,item) => {
          if(!item.price || !item.quantity) {
            return sum;
          } else {
              return sum + convertNumber(item.price) * item.quantity;
          }
    }, 0)
}

const formatNumber = (number) => {
 
  return Number(number).toLocaleString('vi-VN');
}
 onMounted(() => {
         console.log("dữ liệu của giỏ hàng là " + cart.listItems);
  })
</script>
