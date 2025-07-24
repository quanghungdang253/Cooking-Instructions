
<template>
    <div class="flex justify-between mt-4 shadow-2xl p-4">
        <form class="grid gap-4 h-[500px]" @submit.prevent="submitForm">
            <h1> THÔNG TIN HỌC VIÊN </h1>
            <hr>
            <div>
                <h3 class="font-bold"> Họ và tên </h3>
                <input name="name"  v-model="form.name"  type="text" placeholder="Nhập đầy đủ họ tên" class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
            </div>
            <div>
                 <h3 class="font-bold"> Giới tính </h3>
                <select name="" id="" v-model="form.gender">
                        <option value="Nam"> Nam </option>
                        <option value="Nữ"> Nữ </option>
                        <option value=""> Khác </option>
                </select>
            </div>
             <div>
                <h3 class="font-bold"> Tuổi </h3>
                <input name="age" v-model="form.age" type="text" placeholder="Nhập tuổi" class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
            </div>
              <div>
                <h3  class="font-bold"> Điện thoại </h3>
                <input name="phone" v-model="form.phone" type="text" placeholder="Nhập số điện thoại"  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
            </div>
              <div>
                <h3  class="font-bold"> Email </h3>
                <input v-model="form.email" name="email"  type="text" placeholder="Nhập Email"  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
             </div>
               <div>
                <h3  class="font-bold"> Địa chỉ </h3>
                <input v-model="form.address"  name="address"  type="text" placeholder="Nhập vào địa chỉ "  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">
             </div>
             <div>
                <h2  class="font-bold"> Ghi chú thêm </h2>
                <textarea v-model="form.note"   name="note" id=""  class="border border-black min-w-[25em] inline-block p-2 rounded-xl">

                </textarea>
             </div>

      
                <div>
                    
                                <h1> HÌNH THỨC THANH TOÁN </h1>
                        <div class="flex items-center gap-2">
                               <input 
                                id="bank"
                                type="radio"  
                                value="Chuyển khoản ngân hàng"  
                                name="payment"  
                                v-model="form.payment_method"
                             >
                           <label for="bank"><strong>Chuyển khoản ngân hàng</strong></label>
                        </div>
                         <div  class="flex items-center gap-2">
                             <input type="radio" id="momo" value="MOMO"   v-model="form.payment_method"  name="payment">
                            <label for="momo">
                                    <strong>Thanh toán bằng ví MOMO</strong>
                             </label>
                        </div  class="flex items-center gap-2">

                         <div class="flex items-center gap-2">
                             <input type="radio" id="atm" value="Thẻ nội địa"   v-model="form.payment_method" name="payment">
                             <label for="atm"><strong>Thanh toán bằng thẻ nội địa</strong></label>
                         </div>
                        <div>
                                <img src="https://daubepgiadinh.vn/wp-content/plugins/onepay-payment-gateway-for-woocommerce-atmcard/OPATM.png" alt="">
                        </div>
                         <div class="flex items-center gap-2">
                                <input 
                                    type="radio" 
                                    id="visa" 
                                    value="Thẻ quốc tế" 
                                       v-model="form.payment_method"
                                      name="payment"
                                >
                             <label for="visa">
                                            <strong>Thanh toán bằng thẻ quốc tế</strong>
                                            <img src="https://daubepgiadinh.vn/wp-content/plugins/onepay-payment-gateway-for-woocommerce-creditcard/US.png" alt="" class="w-10 ml-2">
                            </label>
                             <!-- <p class="mt-4 text-green-600 font-bold">Bạn đã chọn: {{ paymentMethod }}</p> -->
                                </div>
                       
                 </div>
              <button 
                type="submit"
                class="flex justify-center mt-10 bg-orange-500  text-white">
                                TIẾN HÀNH THANH TOÁN 
                        </button>
        </form>
       
        
    </div>

</template>


<script setup>
import { computed, ref } from 'vue';
import cartStore from '@/store/store';
const store = cartStore();
const Sum = computed(() => {
    let total = 0;
    props.dataStore.forEach(element => {
            total += Number(element.price.replace(/\./g, ''));
    });
    return total;
})
const form = ref({
  name: '',
  age: '',
  phone: '',
  email: '',
  gender: 'Nam',
  address: '',
  note: '',
  payment_method: ''
});

const submitForm = async () => {
  if (!form.value.payment_method) {
    alert('Vui lòng chọn hình thức thanh toán');
    return;
  }

  for (const product of store.listItems) {
    const payload = new FormData();
       payload.append('name', form.value.name);
       payload.append('age', form.value.age);
       payload.append('phone', form.value.phone);
       payload.append('email', form.value.email);
       payload.append('gender', form.value.gender);
       payload.append('address', form.value.address);
       payload.append('note', form.value.note);
       payload.append('payment_method', form.value.payment_method);
       payload.append('product_name', product.name || product.product_name);
       payload.append('product_price', product.price);
       payload.append('product_image', product.img || product.product_image);

    try {
      const response = await fetch('https://quanghung.kesug.com/submit.php', {
        method: 'POST',
        body: payload
      });
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Lỗi gửi dữ liệu:', error);
    }
  }

  alert('Đã gửi đơn hàng thành công!');
  store.listItems = []; // Xóa giỏ hàng sau khi gửi
  localStorage.removeItem('cart-items');
};


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


