
<template>
    <div>
       
        <div v-if="data" class="font-sans">
            <div class="grid  gap-4">
                <div class="flex flex-col justify-center items-center">  
                    <h1 class="text-2xl font-bold "> {{ data.fullname }} </h1>
                     <img src="https://daubepgiadinh.vn/wp-content/uploads/2021/05/heading-line.png" alt="">
                </div>
                <div>
                    {{ data.content }}  
                </div>
                <img :src="data.img" alt="">
                <div> 
                    <h1 class="font-bold"> Quá trình công tác </h1>
                    <ul>
                        <li v-for="(item,index) in data.workingProcess" :key="index">
                            {{ item }}
                        </li>
                     </ul>
                 </div>
                 <div> 
                      <p> {{ data.text }}  </p>
                    <ul>
                         <li v-for="(item, index) in data.prize" :key="index">
                             + {{ item }}
                         </li>
                    </ul>
                 </div>
                <p>
                    {{ data.text2 }}
                </p>
                <div class="flex">
                     <StarIcon class="w-6 h-6 text-yellow-400" />
                     <StarIcon class="w-6 h-6 text-yellow-400" />
                     <StarIcon class="w-6 h-6 text-yellow-400" />
                     <StarIcon class="w-6 h-6 text-yellow-400" />
                     <StarIcon class="w-6 h-6 text-yellow-400" />

                </div>
                <p> {{ data.point }}</p>

            </div>
        </div>

    </div>


</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'

        const props = defineProps({
            data: {
                type: Object,
                required: true
            }
        })

</script>