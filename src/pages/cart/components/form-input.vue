
<template>
    <div class="flex justify-between mt-4 shadow-2xl p-4">
        <div class="grid gap-4 h-[500px]">
            <h1> THÔNG TIN HỌC VIÊN </h1>
            <hr>
            <div>
                <h3 class="font-bold"> Họ và tên </h3>
                <input type="text" placeholder="Nhập đầy đủ họ tên" class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
            </div>
             <div>
                <h3 class="font-bold"> Tuổi </h3>
                <input type="text" placeholder="Nhập tuổi" class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
            </div>
              <div>
                <h3  class="font-bold"> Điện thoại </h3>
                <input type="text" placeholder="Nhập số điện thoại"  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
            </div>
              <div>
                <h3  class="font-bold"> Email </h3>
                <input type="text" placeholder="Nhập Email"  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
             </div>
               <div>
                <h3  class="font-bold"> Địa chỉ </h3>
                <input type="text" placeholder="Nhập vào địa chỉ "  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
             </div>
             <div>
                <h2  class="font-bold"> THÔNG TIN BỔ SUNG </h2>
                <textarea name="" id=""  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">

                </textarea>
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


