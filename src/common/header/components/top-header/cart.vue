

<template>
        <div>
            <router-link class="flex w-30 items-center bg-green-700 text-white p-2 rounded-md">
                  <ShoppingCartIcon class="w-8"/>
                    <h1 class="font-bold"> Giỏ hàng </h1>
              
            </router-link>
        </div>
    
</template>


<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script>