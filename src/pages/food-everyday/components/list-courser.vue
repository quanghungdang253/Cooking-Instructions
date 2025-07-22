
<template>
    <div class="min-w-[70%]">
        <div>
               
      <div  class="grid grid-cols-4 mt-4 gap-4" >
        <router-link 
        to="/"
            v-for="(item,index) in props.data" 
            :key="index"
            class="
                 
                bg-white 
                 inline-block 
                  max-w-[15em]
                  pb-6
                  rounded-sm
                  flex flex-col items-center
                  hover:translate-y-[-5px]
                  duration-300
            "
        >
            <div>   
                <img :src="item.img" alt="">
           
            </div>
             <h1 class="font-bold text-xl"> {{ item.name }} </h1>
             <h1 class="text-red-600 font-bold"> {{ item.price }} vnđ</h1>

             <div class="bg-green-600 text-white font-bold p-2 mt-2 rounded-lg font-mono"> MUA KHÓA HỌC  </div>

        </router-link>
       </div>
        </div>
    </div>


</template>

<script setup>
import { onMounted } from 'vue';
import { watch } from 'vue';

    const props = defineProps({
        data: {
            type: Array,
            required: true
        },
        nameCourser: {
            type: String,
            required: true
        }
    })

   
</script>