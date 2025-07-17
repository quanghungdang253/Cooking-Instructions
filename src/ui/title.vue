
<template>
  <div class="flex items-center">  
        <div class=" h-1 bg-red-900 flex-1"> </div>
                 <div class="text-center text-white font-bold bg-orange-700 p-2 font-mono w-[30em]"> {{ content }} </div>
        <div class=" h-1  bg-red-900 flex-1"> </div>
 </div>

</template>

<script setup>
import { ref } from 'vue';

  defineProps({
     content: {
        type: String,
        required: true
     },
     
  })
</script>