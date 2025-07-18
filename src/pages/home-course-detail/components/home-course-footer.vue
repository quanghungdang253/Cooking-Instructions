

<template>
    <div class="max-w-[60em]">  
         <h1 class="font-bold my-6 text-[22px]"> Mô tả khóa học    </h1>
    <div v-if="listData">
        <div>
            <h2 class="my-4"> {{ listData.describe.content1 }}</h2>
            <img :src="listData.describe.img" alt="">
            <figcaption>  {{ listData.figcaption }} </figcaption>
            <h2 class="my-4"> {{ listData.describe.content2 }}</h2>
        </div>
        <div v-for="(item,index) in listData.step" :key="index">
            <div>
              <h2 class="mt-6 font-bold mb-6">    {{ item.nameStep }} </h2>
              <img  :src="item.img" alt="">
              <div>
                    <div v-for="(item,index) in  listData.step[index].listFood" :key="index" class="">
                        {{ item }}
                    </div>
              </div>
             
            </div>
        </div>
    </div>

 </div>
   


</template>

<script setup>
import { defineProps } from 'vue';
     const props = defineProps({
        listData :{
            type: Object,
            required: true
        }
     })
</script>