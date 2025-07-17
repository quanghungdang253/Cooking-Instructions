


<template>
    <div class="mt-6">
        <Title content="ĐỘI NGŨ GIẢNG VIÊN" />
        <div class="flex justify-between mt-6 cursor-pointer">
            <div 
                v-for="(item , index) in dataTechers" 
                :key="index"
                class="flex flex-col items-center"
            >
                    <img :src="item.img" :alt="item.name">
                    <h1 class="font-bold text-red-900"> {{ item.name }} </h1>
                    <p class="max-w-[20em] text-center font-bold font-mono"> {{ item.content }}</p>
            </div>
        </div>
    </div>

</template>

<script setup>
    import dataTechers from '../../../../../public/data/data-teachers/data-teachers-show.json';
  import Title from '../../../../ui/title.vue';


</script>