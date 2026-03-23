


<template>
<div>

<div class="bg-[url('https://img.pikbest.com/origin/09/75/54/92HpIkbEsTx3j.jpeg!w700wp')]">

<!-- HEADER -->
<div class="relative w-full flex items-center justify-center">
<div class="bg-slate-800 opacity-70 w-full h-20"></div>

<h1 class="font-bold text-3xl font-mono text-white absolute top-4">
{{ nameCourser?.vi }}
</h1>
</div>


<div class="max-w-[1280px] mx-auto" v-if="data && data.length > 0">

<div class="flex gap-4">

<!-- LIST COURSE -->

<listCourse
:data="
select === 'popularity' ? listPopularity :
select === 'rating' ? listRating :
select === 'date' ? listDate :
select === 'price-asc' ? listPriceAsc :
select === 'price-desc' ? listPriceDesc :
filterLearning
"
:nameCourser="nameCourser?.vi"
/>


<!-- SIDEBAR FILTER -->

<div class="mt-4 w-[280px]">


<!-- LỌC THEO GIÁ -->

<div class="flex items-center justify-center bg-yellow-400 p-2 mb-2">
<FunnelIcon class="w-5 h-5 text-gray-700"/>
<h6 class="text-[14px] font-bold ml-2">Lọc Theo Giá</h6>
</div>

<div class="bg-white p-3 space-y-2">

<div
@click="select='default'"
class="p-2 cursor-pointer rounded"
:class="select==='default' ? 'bg-yellow-200 font-bold' : 'hover:bg-gray-100'"
>
Mặc định
</div>

<div
@click="select='popularity'"
class="p-2 cursor-pointer rounded"
:class="select==='popularity' ? 'bg-yellow-200 font-bold' : 'hover:bg-gray-100'"
>
Mức độ phổ biến
</div>

<div
@click="select='rating'"
class="p-2 cursor-pointer rounded"
:class="select==='rating' ? 'bg-yellow-200 font-bold' : 'hover:bg-gray-100'"
>
Điểm đánh giá
</div>

<div
@click="select='date'"
class="p-2 cursor-pointer rounded"
:class="select==='date' ? 'bg-yellow-200 font-bold' : 'hover:bg-gray-100'"
>
Mới nhất
</div>

<div
@click="select='price-asc'"
class="p-2 cursor-pointer rounded"
:class="select==='price-asc' ? 'bg-yellow-200 font-bold' : 'hover:bg-gray-100'"
>
Giá thấp → cao
</div>

<div
@click="select='price-desc'"
class="p-2 cursor-pointer rounded"
:class="select==='price-desc' ? 'bg-yellow-200 font-bold' : 'hover:bg-gray-100'"
>
Giá cao → thấp
</div>

</div>


<!-- HÌNH THỨC HỌC -->

<div class="flex items-center justify-center bg-blue-600 text-white p-2 mb-2 mt-4">
<FunnelIcon class="w-5 h-5"/>
<h6 class="text-[14px] font-bold ml-2">Hình Thức Học</h6>
</div>

<div class="bg-white p-3 space-y-2">

<div
@click="formLearning='default'"
class="p-2 cursor-pointer rounded"
:class="formLearning==='default' ? 'bg-blue-200 font-bold' : 'hover:bg-gray-100'"
>
Mặc định
</div>

<div
@click="formLearning='workshop'"
class="p-2 cursor-pointer rounded"
:class="formLearning==='workshop' ? 'bg-blue-200 font-bold' : 'hover:bg-gray-100'"
>
Workshop
</div>

<div
@click="formLearning='practice'"
class="p-2 cursor-pointer rounded"
:class="formLearning==='practice' ? 'bg-blue-200 font-bold' : 'hover:bg-gray-100'"
>
Thực hành
</div>

</div>

</div>

</div>

</div>

<div v-else>
<loading/>
</div>

</div>

</div>
</template>




   <script setup>
   import { computed, onMounted, ref,watch } from 'vue';
   import { useRoute, onBeforeRouteUpdate } from 'vue-router';
   import endpointName from './components/endponit-name';
   import loading from '@/ui/loading.vue';
   import useFoodEveryDay from '@/hooks/use-food-every-day/use-food-every-day';
      import axiosClient from '../../api/axios-client';
   import useFoodListHome from '@/hooks/use-food-list-home/useFoodListHome';
   import listCourse from './components/list-courser.vue';
   // import sideBar from './components/side-bar.vue';
   import HomeCourseDetail from '../../hooks/use-handle-detail/use-home-course-detail';
   import useCourseHome from '../../hooks/use-show-course/use-course-home';
   import { FunnelIcon } from '@heroicons/vue/24/solid'
   const route = useRoute();
   
   const select = ref('default');
   const formLearning = ref('default');  // lọc hình thức học


   const endpoint = computed(() => route.params.endpoint);


   const id = computed(() => Number(route.params.id));

  const listPopularity  = ref([]);
  const listRating = ref([]);
  const listDate = ref([]);
  const listPrice = ref([]);
  const listPriceAsc = ref([]);
  const listPriceDesc = ref([]);


  const { data } = useFoodListHome();

  


    const getData = computed(() => {
      if(!Array.isArray(data.value)) return [];

      return data.value.filter(item => item.endpoint === endpoint.value);
    })



   watch(getData, (val) => {
          console.log("dữ liệu nhận được kaf " + val[0]);
  })


const convertPrice = (price) => {
   if (!price) return { min: 0, max: 0 };

   // nếu là khoảng giá
   if (price.includes(" - ")) {
      const [min, max] = price.split(" - ")
         .map(p => parseFloat(p.replace(/\./g, "")));
      return { min, max };
   }

   // nếu chỉ có 1 giá
   const value = parseFloat(price.replace(/\./g, ""));7
   return { min: value, max: value };
}




watch([select, formLearning], ([newValue]) => {

    if(!filterLearning.value) return;

    if(newValue == "popularity"){
        listPopularity.value = filterLearning.value.filter(item => item.id % 2 === 0)

    } else if(newValue == "rating"){
        listRating.value = filterLearning.value.filter(item => item.id % 2 === 1)

    } else if(newValue == "date"){
        listDate.value = filterLearning.value.filter(item => item.id % 3 === 0)

    } else if(newValue == "price-asc"){
        listPriceAsc.value = filterLearning.value.slice().sort(
           (a,b) => convertPrice(a.price).min - convertPrice(b.price).min
        )

    } else if(newValue == "price-desc"){
        listPriceDesc.value = filterLearning.value.slice().sort(
           (a,b) => convertPrice(b.price).min - convertPrice(a.price).min
        )
    }
})


watch(endpoint, () => {

          listPopularity.value = [];
          listRating.value = [];
          listDate.value = [];
          listPriceAsc.value = [];
          listPriceDesc.value = [];

            select.value = 'default';
});

const filterLearning = computed(() => {
   if(formLearning.value === "default") return getData.value;

   return getData.value.filter(item => 
      item.form_of_learning === formLearning.value
   );
});

   
   const nameCourser = computed(() => {
      return endpointName.find((item) => item.en === endpoint.value);
   });

   </script>



<











