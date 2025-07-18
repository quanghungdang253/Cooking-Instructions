

<template>
    <div>
        <div class="flex">
                <img :src="listData.img" alt="">
                 <div>
                     <h1> {{ listData.name }} </h1>
                        <div class="flex mt-10">
                            <StarIcon class="max-w-[2em] text-orange-500" />
                              <StarIcon  class="max-w-[2em] text-orange-500" />
                              <StarIcon class="max-w-[2em] text-orange-500"  />
                            <StarIcon  class="max-w-[2em] text-orange-500" />
                            <StarIcon class="max-w-[2em] text-orange-500"  />
                            <div class="w-[25em]"> Đánh giá từ khách hàng </div>
                        </div>
                        <div class="flex items-center justify-between mt-10">
                              <h1>  Giá : {{ listData.price }}  </h1>  

                              <router-link class="bg-orange-400 inline-block p-2"> ĐĂNG KÝ HỌC   </router-link>
                        </div>
                 </div>
        </div>
    </div>

</template>

<script setup>
  import { HandRaisedIcon, StarIcon, ChartBarIcon } from '@heroicons/vue/24/solid';
        const props = defineProps({
            listData: {
                type: Object,
                required: true
            }
        })

</script>