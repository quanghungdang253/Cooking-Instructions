

<template>
    <div class="max-w-[60em] bg-white p-6" v-if="listData">  
        <div
             v-if="listData.endpoint == 'data-study-program'"
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
         <h1 class="font-bold my-6 text-[22px]"> Mô tả khóa học    </h1>
     <div v-if="listData">
       <figure>  
            <h2 class="my-4"> {{ listData.describe.content1 }}</h2>
            <img :src="listData.describe.img" alt="">
            <figcaption>  {{ listData.figcaption }} </figcaption>
            <h2 class="my-4"> {{ listData.describe.content2 }}</h2>
      </figure>
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
import Table from '../../../ui/table.vue';
import { defineProps } from 'vue';
     const props = defineProps({
        listData :{
            type: Object,
            required: true
        }
     })
</script>