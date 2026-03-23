<template>

<div class="max-w-[60em] mx-auto bg-white p-8 rounded-xl shadow-lg">

<h1 class="font-bold text-[26px] mb-6 border-b pb-3">
Mô tả khóa học
</h1>

<div v-if="listData">

<!-- DESCRIPTION -->

<figure class="space-y-6">

<h2 class="text-[17px] leading-relaxed text-gray-700">
{{ listData.description.content1 }}
</h2>

<img
:src="listData.description.img"
class="rounded-lg shadow-md w-full object-cover"
/>

<figcaption class="text-sm text-gray-500 italic text-center">
{{ listData.description.figcaption }}
</figcaption>

<h2 class="text-[17px] leading-relaxed text-gray-700">
{{ listData.description.content2 }}
</h2>

</figure>


<!-- STEPS -->

<h1 class="font-bold text-[24px] mt-10 mb-6 border-b pb-3">
Các bước thực hiện
</h1>


<div
v-for="(step,index) in listData.steps"
:key="index"
class="mb-10 p-6 bg-gray-50 rounded-xl border hover:shadow-md transition"
>

<!-- STEP TITLE -->

<h2 class="text-[20px] font-bold mb-4 flex items-center gap-2">

<span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
Bước {{ index + 1 }}
</span>

{{ step.name_step }}

</h2>


<!-- STEP IMAGE -->

<img
:src="step.img"
class="rounded-lg shadow mb-6 w-full object-cover"
/>


<!-- STEP CONTENT -->

<div class="space-y-3">

<div
v-for="(item,i) in step.items"
:key="i"
class="flex gap-3 text-gray-700 leading-relaxed"
>

<span class="text-red-500 font-bold">▶</span>

<p>
{{ item.content }}
</p>

</div>

</div>

</div>

</div>

</div>

</template>

<script setup>

import Table from '../../../ui/table.vue';
import { computed, defineProps, ref } from 'vue';
     const props = defineProps({
        listData :{
            type: Object,
            required: true
        }
     })

  
</script>