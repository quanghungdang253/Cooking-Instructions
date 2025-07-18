
<template>
    <div class="mt-10">
        <div class="flex items-center justify-between">
             <div v-for="(item , index) in dataCustomers"  :key="index" class="flex flex-col items-center shadow-[0_10px_40px_rgba(0,0,0,0.7)] p-6 max-w-[25em]">
                <div class="max-w-[15em] h-[18em]">   
                    <img :src="item.img" alt="" :key="index" class="rounded-[999px]  " >
                    <div class="flex items-center justify-center mt-4">
                           <StarIcon class="text-orange-500 w-2rem h-5" /> 
                 
                           <StarIcon class="text-orange-500 w-2rem h-5" /> 
                            <StarIcon class="text-orange-500 w-2rem h-5" /> 
                              <StarIcon class="text-orange-500 w-2rem h-5" /> 
                            <StarIcon class="text-orange-500 w-2rem h-5" /> 
                    </div>
                </div>
                    <div class="min-h-[15em]">
                        <i class="text-red-950">
                            {{ item.content }}
                        </i>
                    </div>
                   
                        <h1 class="font-bold text-2xl font-mono text-black"> {{ item.fullname }}</h1>
                        <p>{{ item.nameTest }}</p>
                  
             </div>
        </div>
    </div>


</template>


<script setup>
        import { ref } from 'vue';
        import dataCustomers from '../../assets/static-data/data-evaluate-customers.json'
        import { StarIcon } from '@heroicons/vue/20/solid'
    console.log("Dữu liệu là " + dataCustomers);
</script>