

<template>
    <div class="max-w-[60em] bg-white p-6" >  
        <div
          
             class=""
        >   
            <h1 class="my-4 font-bold font-mono text-red-600"> CHƯƠNG TRÌNH HỌC TRỰC TUYẾN </h1>
            <Table 
                :rows="4"
                :columns="['Tên Module', 'Chuyên Đề', 'Nội Dung Chi Tiết','Học Phí Theo Combo']"
                :data="[
                     ['', 'Chuyên đề Cơm chiên – Mì xào', ' Cơm chiên dương châu, Cơm chiên hải sản , Mì xào thập cẩm', '700.000vnđ',],
                      ['Bữa sáng thông minh kiểu Việt', 'Chuyên đề xôi', 'Xôi gà, Xôi gấc, Xôi xá xíu ', '700.000 vnđ',],
                       ['', 'Chuyên đề điểm tâm', ' Bún bò Huế, Bún riêu cua ', '700.000 vnđ',],
                   
                ]"
                        
             />
             <img 
                :src="listData.id % 2 == 0 ?
               'https://hoasenfoods.vn/wp-content/uploads/2024/01/bun-bo-hue.jpg' :
               'https://cdn.tgdd.vn/2020/12/CookProduct/9-1200x676-1.jpg'" 
               alt=""
               class="w-full"
               >

             <h1 class="my-4 font-bold font-mono text-red-600"> CHƯƠNG TRÌNH HỌC TRỰC TIẾP  </h1>
            <Table 
                :rows="4"
                :columns="['Tên Module', 'Chuyên Đề', 'Nội Dung Chi Tiết','Số Buổi' ,'Học Phí Theo Combo']"
                :data="[
                       ['', 'Chuyên đề Sandwich & Burger', ' Sandwich với ham cheese,  Burger bò', '1 Buổi', '1.800.000 vnđ',],
                       ['Bữa sáng thông minh Kiểu Âu', 'Chuyên đề Mỳ ý', 'Spaghetti alla bolognese (Mỳ ý xốt bò bằm),  Spaghetti alla carbonara (Mỳ ý xốt kem trứng) ', '1 Buổi',  '1.800.000 vnđ',],
                       ['', 'Chuyên đề Steak', ' Thăn bò xốt hương thảo, Thăn bò xốt tiêu,  Salad', '1 Buổi', '1.800.000 vnđ',],
                ]"
                        
             />
             <img 
                :src="listData.id % 2 == 0 ?
               'https://cdn.tgdd.vn/Files/2022/03/21/1421463/tong-hop-10-mon-an-au-chuan-vi-ngon-khong-kem-gi-ngoai-nha-hang-202203211500552114.jpg' :
               'https://i-giadinh.vnecdn.net/2022/10/09/-5080-1665301792.jpg'" 
               alt=""
               class="w-full"
               >
        </div>
 

        <h1 class="font-bold my-6 text-[24px] border-b pb-2">
  Mô tả khóa học
</h1>

<div v-if="listData" class="space-y-8">

  <!-- DESCRIPTION -->
  <figure class="space-y-5">

    <h2 class="text-gray-700 leading-relaxed text-[16px]">
      {{ listData.description.content1 }}
    </h2>

    <img
      :src="listData.img"
      alt=""
      class="w-full rounded-lg shadow-md object-cover"
    >

    <figcaption class="text-sm text-gray-500 italic text-center">
      {{ listData.description.figcaption }}
    </figcaption>

    <h2 class="text-gray-700 leading-relaxed text-[16px]">
      {{ listData.description.content2 }}
    </h2>

  </figure>


  <!-- STEPS -->
  <div
    v-for="(item,index) in listData.steps"
    :key="index"
    class="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition"
  >

    <!-- step title -->
    <h2 class="mt-2 font-bold mb-4 text-[18px] flex items-center gap-2">
      <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
        Bước {{ index + 1 }}
      </span>

      {{ item.name_step }}
    </h2>

    <!-- step image -->
    <img
      :src="item.img"
      alt=""
      class="w-full rounded-lg shadow mb-4 object-cover"
    >

    <!-- step content -->
    <div class="space-y-2 text-gray-700">

      <div
        v-for="(item,index) in item.items"
        :key="index"
        class="flex gap-2 items-start"
      >

        <span class="text-red-500 font-bold">▶</span>

        <p class="leading-relaxed">
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
import { defineProps } from 'vue';
     const props = defineProps({
        listData :{
            type: Object,
            required: true
        }
     })
</script>