

<template>
    <div class="flex flex-col bg-white w-[22rem]">  
    <div  class="">
        <div class="">
            <h1 
                class="
                font-bold
              bg-red-600
               text-white
               text-center
               p-4
               mb-4
               rounded-sm
            "
            > KHÓA HỌC MUA NHIỀU 
        </h1>
            <div 
             v-if="boxAlot"
            class="shadow-2xl p-6 rounded-xl grid gap-4"> 
                <router-link 
                    :to="{
                        name: 'food-detail',
                        params: {
                            id: item.id
                        }

                    }"
                    v-for="(item, index) in boxAlot" 
                    :key="index" class="mb-4  hover:translate-y-[-4px] duration-300 cursor-pointer 
                    
                    ">
                    <div class="flex items-center justify-center gap-4">
                        <img :src="item.img" alt="" class="rounded-[5px] w-40  ">
                         
                        <div>
                            <h1 class="font-bold font-mono"> {{ item.name }}</h1>
                            <p class="text-red-600 font-bold mt-6"> Giá : {{ item.price }} vnđ</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>




    
<h1  
   class="
                font-bold
              bg-red-600
               text-white
               text-center
               p-4
               mb-4
               rounded-sm
            ">
                         KHÓA HỌC ĐÁNH GIÁ CAO
 </h1>
  <div  class="">
        <div class="">
            <div 
             v-if="boxAlot"
            class="shadow-2xl p-6 rounded-xl grid gap-4"> 
                <router-link 
                    :to="{
                        name: 'food-detail',
                        params: {
                            id: item.id
                        }

                    }"
                    v-for="(item, index) in boxHight" 
                    :key="index" class="mb-4  hover:translate-y-[-4px] duration-300 cursor-pointer 
                    
                    ">
                    <div class="flex items-center justify-center gap-4">
                        <img :src="item.img" alt="" class="rounded-[5px] w-40  ">
                         
                        <div>
                            <h1 class="font-bold font-mono"> {{ item.name }}</h1>
                            <p class="text-red-600 font-bold mt-6"> Giá : {{ item.price }} vnđ</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>





         
    </div>
</template>


<script setup>

import { defineProps, watch , ref, computed} from 'vue';
            const props = defineProps({
                listData: {
                    type: Array,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                }
            })

            
        const boxAlot = computed(() => {
            if (!Array.isArray(props.listData)) return []

             return props.listData.filter(item => item.type === "Alot").slice(0, 8);
})

    const boxHight = computed(() => {
        if (!Array.isArray(props.listData)) return []
         return props.listData.filter(item => item.type === "highlyAppreciated").slice(0,8);
})

         

          

</script>