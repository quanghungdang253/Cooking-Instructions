

<template>
    <div v-if="listData">
        <div>
            <h1 
                class="
                font-bold
              bg-red-600
               text-white
               text-center
               p-4
               mb-4
               rounded-xl
            "
            > KHÓA HỌC MUA NHIỀU 
        </h1>
            <div class="shadow-2xl p-6 rounded-xl grid gap-4"> 
                <router-link 
                    :to="{
                        name: 'home-course-detail',
                        params: {
                            endpoint: item.nameCourserSideBar,
                            id: item.id
                        }

                    }"
                    v-for="(item, index) in listData?.buyALot" 
                    :key="index" class="mb-4  hover:translate-y-[-4px] duration-300 cursor-pointer 
                    
                    ">
                    <div class="flex gap-4">
                        <img :src="item.img" alt="" class="rounded-xl">
                        <div>
                            <h1 class="font-bold font-mono"> {{ item.nameCourser }}</h1>
                            <p class="text-red-600 font-bold mt-6"> Giá : {{ item.price }} vnđ</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

       <div>
        <div>
            <h1 
                class="
                font-bold
              bg-red-600
               text-white
               text-center
               p-4
               mb-4
               rounded-xl
            "
            > KHÓA HỌC ĐÁNH GIÁ CAO
        </h1>
            <div class="shadow-2xl p-6 rounded-xl grid gap-4">
                <router-link 
                    v-for="(item, index) in listData?.highlyAppreciated" :key="index" class="mb-4"
                    :to="{name: 'home-course-detail', 
                         params: {
                            endpoint: item.nameCourserSideBar,
                            id: item.id
                        }
                    }"
                    >
                    <div class="flex gap-4">
                        <img :src="item.img" alt=""  class="rounded-xl">
                        <div>
                            <h1 class="font-bold font-mono"> {{ item.nameCourser }}</h1>
                            <p class="text-red-600 font-bold mt-6"> Giá : {{ item.price }} vnđ</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script setup>

import { defineProps } from 'vue';
            const props = defineProps({
                listData: {
                    type: Object,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                }
            })


</script>