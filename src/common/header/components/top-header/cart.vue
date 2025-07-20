

<template>
  <div  v-if="cart.listItems.length > 0">  
        <div class="relative">
            <router-link 
                to="/Cart"
                class="flex w-30 items-center bg-indigo-900 text-white p-2 rounded-md">
                  <ShoppingCartIcon class="w-8"/>
                    <h1 class="font-bol font-mono"> Giỏ hàng </h1>
              
            </router-link>
           <span class="inline-block absolute top-0  left-4 z-50 text-white font-bold bg-red-600 p-1  rounded-[999px] text-[10px]">   {{ cart.listItems.length }} </span>
        </div>
    </div>
    
</template>


<script setup>
import cartStore from '../../../../store/store';
const cart = cartStore();
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script>