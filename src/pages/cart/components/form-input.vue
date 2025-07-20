
<template>
    <div class="flex justify-between mt-4">
        <div class="grid gap-4">
            <h1> THÔNG TIN HỌC VIÊN </h1>
            <hr>
            <div>
                <h3> Họ và tên </h3>
                <input type="text" placeholder="Nhập đầy đủ họ tên" class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
            </div>
              <div>
                <h3> Điện thoại </h3>
                <input type="text" placeholder="Nhập số điện thoại"  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
            </div>
              <div>
                <h3> Email </h3>
                <input type="text" placeholder="Nhập Email"  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
             </div>
               <div>
                <h3> Địa chỉ </h3>
                <input type="text" placeholder="Nhập vào địa chỉ "  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
             </div>
             <div>
                <h2> THÔNG TIN BỔ SUNG </h2>
                <textarea name="" id=""  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">

                </textarea>
             </div>
        </div>
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
                        v-for="(item , index) in dataStore "   
                        :key="index"
                      
                    >
                    <div   class="flex justify-between p-2 font-bold">  
                        <h1 >{{ item.name }}</h1>
                        <h1 class="text-red-500 font-bold">{{   item.price  }} vnđ</h1>  
                    </div>
                          <div   class="flex justify-between p-2 font-bold">  
                             <h1> TẠM TÍNH </h1>
                            <h1 class="text-red-500 font-bold">{{  convertNumber   }} vnđ</h1>  
                         </div>
                      </div>
                    </div>
                <div >
                        <h1> HÌNH THỨC THANH TOÁN </h1>
                        <div class="flex items-center gap-2">
                               <input type="radio" name="payment">
                              <strong>Chuyển khoản ngân hàng   </strong>
                        </div>
                         <div  class="flex items-center gap-2">
                               <input type="radio"  name="payment">
                              <strong> Thanh toán bằng ví MOMO  </strong>
                        </div  class="flex items-center gap-2">
                         <div  class="flex items-center gap-2">
                               <input type="radio"  name="payment">
                              <strong> Thanh toán bằng thẻ nội địa  </strong>
                        </div >
                        <div>
                                <img src="https://daubepgiadinh.vn/wp-content/plugins/onepay-payment-gateway-for-woocommerce-atmcard/OPATM.png" alt="">
                        </div>
                         <div  class="flex items-center gap-2">
                               <input type="radio" name="payment">
                               <h3> Thanh toán bằng thẻ quốc tế </h3>
                               <img src="https://daubepgiadinh.vn/wp-content/plugins/onepay-payment-gateway-for-woocommerce-creditcard/US.png" alt="">
                        </div>
                        <div class="flex justify-center mt-10">
                                <button class="inline-block p-4 rounded-lg bg-orange-500 text-white font-bold text-center"> TIẾN HÀNH THANH TOÁN  </button>
                        </div>
                       
                 </div>
            </div>
        </div>
        
    </div>

</template>


<script setup>
import { computed, ref } from 'vue';

const Sum = computed(() => {
    let total = 0;
    props.dataStore.forEach(element => {
            total += Number(element.price.replace(/\./g, ''));
    });
    return total;
})


const convertNumber = computed(() => {
    return  Sum.value.toLocaleString('vi-VN', { minimumFractionDigits: 0 })
})

     const props = defineProps({
        dataStore: {
            type: Object,
            required: true
        }
 })

</script>


