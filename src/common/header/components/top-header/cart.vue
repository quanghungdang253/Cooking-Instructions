

<template>
        <div>
            <router-link 
                to="/Cart"
                class="flex w-30 items-center bg-indigo-900 text-white p-2 rounded-md">
                  <ShoppingCartIcon class="w-8"/>
                    <h1 class="font-bol font-mono"> Giỏ hàng </h1>
              
            </router-link>
        </div>
    
</template>


<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script>