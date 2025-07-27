

<template>
    <aside class=" h-[100vh]">
        <div>
            <img :src="img" alt="" >
        </div>
        <div class="p-4">
            <h1 class="font-bold"> CHUYÊN MỤC </h1>
            <ul class="grid gap-4">
                <li v-for="(item, index)  in listData.category "
                :key="index" class="underline text-[14px] hover:text-red-500"  >
                    <router-link 
                        :to="item.endpoint"
                        class="font-bold font-medium"
                        >  {{ item.name }}  </router-link>
                </li> 
            </ul>
        </div>
    </aside>


</template>

<script setup>
        import img from '../assets/img/bang-dang-ky.gif';

        const props = defineProps({
            listData:{
                type: Object,
                required: true
            }
        })
</script>;